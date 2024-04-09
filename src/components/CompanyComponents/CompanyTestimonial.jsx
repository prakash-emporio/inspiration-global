import CompanyContent from "./CompanyContent";

export default function CompanyTestimonial({ details, certifications }) {
	return (
		<div className="container company-content-margin">
			{details.map((detail, index) => {
				return (
					<CompanyContent
						key={index}
						text={detail}
						index={index}
					/>
				);
			})}
			<div className="row g-0">
				<div className="col d-flex justify-content-start align-items-center">
					<h2 className="talent-testimonial-header">
						Certifications
					</h2>
				</div>
				<div className="col-md-10 col-lg-7 service-testimonial-text text-white">
					<ul className="company-certification-wrapper">
						{certifications.map((certification, index) => (
							<li key={index}>{certification}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
