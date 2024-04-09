import { useEffect, useState } from "react";
import CompanyTeamCard from "../components/CompanyComponents/CompanyTeamCard.jsx";
import {
	CompanyTestimonial,
	NewCompanyHero,
} from "../components/CompanyComponents/index.js";
import { Form } from "../components/home/index.js";
import { getAboutUsPage } from "../utils/index.js";

export default function CompanyPage() {
	const [data, setData] = useState({});
	const [details, setDetails] = useState([]);
  const [certifications, setCertifications] = useState([]);
	const [teamData, setTeamData] = useState([]);

	async function downloadPageData() {
		const response = await getAboutUsPage();
		setData(response.data);
		setDetails(response.data.core);
    setCertifications(response.data.certification)
		setTeamData(response.data.our_team_managements_data);
	}

	useEffect(() => {
		downloadPageData();
	}, []);

	return (
		<div className="company-background-color">
			<div
				id="company-hero-img"
				style={{ backgroundImage: `url(${data.hero_image})` }}
			>
				<NewCompanyHero
					title={data.title}
					subtitle={data.core_section_heading}
				/>
			</div>
			<CompanyTestimonial details={details} certifications={certifications} />
			<div
				id="team"
				className="container-fluid g-0 company-background-color"
			>
				<div className="row g-0">
					<div className="col">
						<h1 className="p-md-5 text-center company-team-header">
							Our Team
						</h1>
					</div>
				</div>
				<div className="container mt-0 mb-0 g-0">
					<div className="row g-0">
						<div className="col-lg-4 ">
							<h1 className="company-team-secondary-header">
								Management
							</h1>
						</div>
						<div className="col-lg-8">
							{teamData.map((member, index) => (
								<CompanyTeamCard
									key={index}
									member={member}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<Form />
		</div>
	);
}
