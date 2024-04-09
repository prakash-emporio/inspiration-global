import "./SharedCTA.css";

export default function SharedCTA({ content, author, profession }) {
	return (
		<div className="software-cta-card-color">
			<div className="container mt-0 mb-0">
				<div className="row g-0 py-5">
					<div className="col-lg-10">
						<h1 className="software-cta-title">{content}</h1>
					</div>
					<div className="d-flex align-items-end flex-column mb-3 px-5">
						<div className="software-cta-text-1 p-2">
							- {author}
						</div>
						<div className="software-cta-text-2 p-2">
							{profession}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
