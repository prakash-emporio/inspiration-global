import Skeleton from "react-loading-skeleton";

export default function SoftwareSkeletonPage() {
	return (
		<>
			<div className="hero-background-img software-hero-background-img">
				<Skeleton height={300} />
			</div>
			<div className="container">
				<div className="feature-section-skeleton">
					<Skeleton height={100} />
					<Skeleton count={3} />
				</div>
				<div className="software-card-consulting-skeleton">
					<Skeleton height={200} />
				</div>
				<div className="software-card-type-skeleton">
					{[1, 2, 3, 4].map((index) => (
						<div
							key={index}
							className="skeleton-item"
						>
							<Skeleton height={200} />
						</div>
					))}
				</div>
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
