import { InsightHero } from "../../components/InsightComponents";

export default function CareersPage() {
	return (
		<>
			<div
				id="hero-talent-img"
				style={{ backgroundImage: "url('/careershero.png')" }}
			>
				<InsightHero title="Careers" />
			</div>
			<div className="container">
				<div className="d-flex justify-content-center align-items-center">
					<iframe
						id="careers-iframe"
						src="https://inspirationglobal.oorwin.com/careers/index.html"
						width={1500}
						height={1000}
						style={{ border: "none", margin: "0px" }}
					></iframe>
				</div>
			</div>
		</>
	);
}
