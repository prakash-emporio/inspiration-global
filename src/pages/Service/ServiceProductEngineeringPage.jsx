import { Form } from "../../components/home/index.js";
import {
	ServiceContent,
	ServiceSectionCard,
	ServicesFeatureSection,
} from "../../components/ServicesComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";
import { useServicePage } from "../../hooks/useServicePage.jsx";
import ServiceSkeletonPage from "./ServiceSkeletonPage.jsx";

export default function ServiceProductEngineeringPage() {
	const { data, details, additionalData, quote, loading, error } =
		useServicePage("product-engineering");

	if (loading) {
		return <ServiceSkeletonPage />;
	}

	if (error) {
		return <div>Error: Unable to fetch data</div>;
	}

	return (
		<>
			<div
				className="hero-background-img"
				style={{ backgroundImage: `url(${data.hero_image})` }}
			>
				<SharedHero
					title={data.hero_heading}
					text={data.banner_text}
				/>
			</div>
			<div className="container">
				{details.map((item, index) => (
					<ServiceContent
						key={index}
						text={item.detail_description}
					/>
				))}
			</div>
			<ServiceSectionCard
				cards={additionalData}
				heading="Product Engineering Services"
			/>
			<ServicesFeatureSection />
			<SharedCTA
				content={quote.quote_content}
				author={quote.quote_author}
				profession={quote.quote_profession}
			/>
			<SharedCard />
			<Form />
		</>
	);
}
