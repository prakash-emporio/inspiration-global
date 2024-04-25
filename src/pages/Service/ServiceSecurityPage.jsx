import LoadingBar from "react-top-loading-bar";
import { Form } from "../../components/home/index.js";
import { ServiceContent } from "../../components/ServicesComponents/index.js";
import { SharedCard, SharedCTA } from "../../components/Shared/index.js";
import SharedHero from "../../components/Shared/SharedHero.jsx";
import { useService } from "../../hooks/useService.jsx";

export default function ServiceSecurityPage() {
	const { data, loading, loadingRef } = useService("security");

	const { details, quote } = data;

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
				style={{ backgroundImage: `url(${data.data.hero_image})` }}
			>
				<SharedHero
					title={data.data.hero_heading}
					text={data.data.banner_text}
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
