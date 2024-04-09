import { Form } from "../../components/home/index.js";
import { ServiceContent } from "../../components/ServicesComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";
import { useServicePage } from "../../hooks/useServicePage.jsx";
import ServiceSkeletonPage from "./ServiceSkeletonPage.jsx";

export default function ServiceCloudServicePage() {
	const { data, details, quote, loading, error } =
		useServicePage("cloud-services");

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
