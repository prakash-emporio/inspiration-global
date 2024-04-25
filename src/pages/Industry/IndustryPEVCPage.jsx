import LoadingBar from "react-top-loading-bar";
import { Form } from "../../components/home/index.js";
import {
	IndustryContent,
	IndustryEngagementModel,
} from "../../components/IndustryComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";
import { useIndustry } from "../../hooks/useIndustry.jsx";

export default function IndustryPEVCPage() {
	const { data, loading, loadingRef } = useIndustry("pe-vc");

	const { hero, details, quoteData, capabilities } = data;

	if (loading) {
		return (
			<LoadingBar
				color="#8800FF"
				ref={loadingRef}
				height={5}
			/>
		);
	}

	return (
		<>
			<div
				className="hero-background-img"
				style={{ backgroundImage: `url(${hero.hero_image})` }}
			>
				<SharedHero
					title={hero.hero_heading}
					text={hero.industry_banner_text}
				/>
			</div>
			{details.map((item, index) => (
				<IndustryContent
					key={index}
					index={index}
					text={item.industry_detail_description}
					bodyImg={hero.industry_body_image}
				/>
			))}
			<div className="talent-card-section-wrapper pb-5">
				<div className="container">
					<h1 className="talent-feature-section-header py-5">
						{hero.industry_capabilities_section_heading}
					</h1>
					<div className="row py-md-5">
						{capabilities?.map((model, index) => (
							<IndustryEngagementModel
								key={index}
								title={model.industry_capabilities_heading}
								description={
									model.industry_capabilities_description
								}
							/>
						))}
					</div>
				</div>
			</div>
			<SharedCTA
				content={quoteData.quote_content}
				author={quoteData.quote_author}
				profession={quoteData.quote_profession}
			/>
			<SharedCard />
			<Form />
		</>
	);
}
