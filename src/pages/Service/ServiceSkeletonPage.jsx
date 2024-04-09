import Skeleton from "react-loading-skeleton";

export default function ServiceSkeletonPage() {
	return (
		<>
			<div className="hero-background-img">
				<Skeleton height={300} />
			</div>
			<div className="container">
				{[1, 2, 3].map((index) => (
					<div
						key={index}
						className="skeleton-item"
					>
						<Skeleton count={3} />
					</div>
				))}
			</div>
			<div className="service-section-card-skeleton">
				{[1, 2, 3].map((index) => (
					<div
						key={index}
						className="skeleton-item"
					>
						<Skeleton height={200} />
					</div>
				))}
			</div>
			<div className="services-feature-section-skeleton">
				{[1, 2, 3].map((index) => (
					<div
						key={index}
						className="skeleton-item"
					>
						<Skeleton height={100} />
					</div>
				))}
			</div>
			<div className="shared-cta-skeleton">
				<Skeleton height={100} />
			</div>
			<div className="shared-card-skeleton">
				<Skeleton height={200} />
			</div>
			<div className="form-skeleton">
				<Skeleton height={300} />
			</div>
		</>
	);
}
