import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogComponent from "../components/BlogDetailComponents/BlogComponent.jsx";
import { SocialIcon } from "../components/BlogDetailComponents/index.js";
import RecentBlogs from "../components/BlogDetailComponents/RecentBlogs.jsx";
import { getBlogPage } from "../utils/index.js";

export default function BlogDetailPage() {
	const [blog, setBlog] = useState(null);
	const [details, setDetails] = useState([]);

	const { slug } = useParams();

	async function downloadBlog() {
		const response = await getBlogPage(slug);
		console.log(response.data);
		setBlog(response.data);
		setDetails(response.data.details);
	}

	useEffect(() => {
		downloadBlog();
	}, [slug]);
	return (
		<>
			<section className="container-fluid g-0">
				<div className="row g-0 position-relative">
					<img
						height={600}
						className="blog-hero-img"
						src={blog?.hero_image || "/blogDetail.png"}
						alt="blog-hero-img"
					/>
					<div className="blog-hero-heading-wrapper">
						<h1 className="blog-hero-heading">
							{blog?.hero_heading}
						</h1>
					</div>
				</div>
			</section>
			<BlogComponent details={details} />
			<SocialIcon />
			<RecentBlogs blogData={blog?.recent_posts} />
		</>
	);
}
