import { NavLink } from "react-router-dom";
import "../css/CTA.css";

export default function CTA({ title, description, logos }) {
	const splitIndex = description.indexOf("Our application services offer");
	const part1 = description.slice(0, splitIndex);
	const part2 = description.slice(splitIndex);
	return (
		<>
			<div className="container-fluid cta-card-color">
				<div className="row">
					<div className="col col-md-12">
						<h1 className="card-body my-5 cta-text text-center">
							{title}
						</h1>
					</div>
				</div>
				<div className="row">
					<div className="col text-center col">
						{/* logos here */}
						{logos.map((logo) => {
							return (
								<NavLink
									reloadDocument
									to={`/software/${logo.id}`}
									key={logo.id}
								>
									<img
										className={`${logo.id} cta-img`}
										src={logo.img}
										alt={`${logo.id}-logo`}
									/>
								</NavLink>
							);
						})}
					</div>
				</div>
			</div>
			<div className="container text-center hero-cta">
				<div className="row">
					<div className="my-lg-5 col col-md-12">
						<p className="cta-paragraph">{part1}</p>
						<p className="cta-paragraph">{part2}</p>
					</div>
				</div>
			</div>
		</>
	);
}
