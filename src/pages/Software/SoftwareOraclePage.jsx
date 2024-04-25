import LoadingBar from "react-top-loading-bar";
import { Form } from "../../components/home/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import {
	CardConsulting,
	CardTypeOne,
	CardTypeTwo,
	FeatureSection,
	SoftwareHero,
} from "../../components/SoftwareComponents/index.js";
import { useSoftware } from "../../hooks/useSoftware.jsx";

export default function SoftwareOraclePage() {
	const { data, loading, loadingRef } = useSoftware("oracle");
	const { heroData, featureSectionData, softwareCardData, quoteData } = data;

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
				className="hero-background-img software-hero-background-img"
				style={{ backgroundImage: `url(${heroData.hero_image})` }}
			>
				<SoftwareHero
					title={heroData.hero_heading}
					text={heroData.hero_sub_heading}
					heroLogo={heroData.banner_logo}
				/>
			</div>
			<FeatureSection
				title={featureSectionData.below_banner_software_details_heading}
				subtitle={
					featureSectionData.below_banner_software_details_sub_heading
				}
				text={featureSectionData.below_banner_software_details_content}
			/>
			<CardConsulting
				image={softwareCardData[0].img}
				title={softwareCardData[0].title}
				content={softwareCardData[0].content}
			/>
			<CardTypeTwo
				image={softwareCardData[1].img}
				title={softwareCardData[1].title}
				content={softwareCardData[1].content}
			/>
			<CardTypeOne
				image={softwareCardData[2].img}
				title={softwareCardData[2].title}
				content={softwareCardData[2].content}
			/>
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
