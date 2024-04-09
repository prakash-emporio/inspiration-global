import { InsightHero } from "../../components/InsightComponents";

const api = {
	heroImg: "/CareersHero.png",
};

export default function CareersPage() {
	return (
		<>
			<div
				id="hero-talent-img"
				style={{ backgroundImage: `url(${api.heroImg})` }}
			>
				<InsightHero title="Careers" />
			</div>
			<div className="container">
				<div className="d-flex justify-content-center align-items-center">
					<iframe
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
