import Slider from "react-infinite-logo-slider";
import "../css/CompanySection.css";

export default function CompanySection({ brands }) {
	return (
		<div className="company-section-wrapper">
			<div className="company-section text-center">
				<Slider
					width="250px"
					duration={40}
					pauseOnHover={true}
					blurBorders={false}
					blurBoderColor={"#fff"}
				>
					{brands.map((brand, index) => (
						<Slider.Slide key={index}>
							<img
								loading="lazy"
								width={180}
								height={120}
								src={brand}
								className="company-logo"
								alt={`company-logo-${index}`}
							/>
						</Slider.Slide>
					))}
				</Slider>
			</div>
		</div>
	);
}
