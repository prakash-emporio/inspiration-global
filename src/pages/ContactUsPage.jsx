import { useEffect, useState } from "react";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import ContactUsHero from "../components/ContactUs/ContactUsHero";
import { getContactUsPage } from "../utils";

const api = {
	heroImg: "/ContactUsHero.png",
};

export default function ContactUsPage() {
	const [data, setData] = useState({});

	async function downloadPageData() {
		const response = await getContactUsPage();
		console.log(response.data);
		setData(response.data);
	}

	useEffect(() => {
		downloadPageData();
	}, []);

	return (
		<>
			<div
				id="hero-talent-img"
				style={{ backgroundImage: `url(${api.heroImg})` }}
			>
				<ContactUsHero title={data.title} />
			</div>
			<div className="container g-0">
				<div className="row g-5 align-items-center">
					<div className="col-md-6">
						<h2 className="contact-us-header">
							{data.contact_below_banner_heading}
						</h2>
						<div className="d-flex flex-column px-3 py-2">
							<p className="contact-us-info">{data.email}</p>
							<p className="contact-us-info">{data.phone}</p>
							<p className="contact-us-info">{data.address}</p>
						</div>
					</div>
					<div className="col-md-6">
						<ContactUsForm />
					</div>
				</div>
			</div>
		</>
	);
}
