import Skeleton from "react-loading-skeleton";

export default function IndustrySkeletonPage() {
	return (
		<>
			<div className="hero-background-img">
				<Skeleton height={300} />
			</div>
			<div className="industry-content-skeleton">
				{[1, 2, 3].map((index) => (
					<div
						key={index}
						className="skeleton-item"
					>
						<Skeleton count={3} />
					</div>
				))}
			</div>
			<div className="talent-card-section-wrapper pb-5">
				<div className="container">
					<h1 className="talent-feature-section-header py-5">
						<Skeleton width={200} />
					</h1>
					<h5 className="text-center health-care-text">
						<Skeleton count={3} />
					</h5>
					<div className="row py-md-5">
						{[1, 2, 3].map((index) => (
							<div
								key={index}
								className="col-md-4"
							>
								<Skeleton height={150} />
								<Skeleton count={2} />
							</div>
						))}
					</div>
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
