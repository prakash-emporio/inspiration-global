export default function JobDetailCard({
  title,
  description,
}) {

   // Function to format the description into HTML content
  function formatDescription(description) {
    // Split the description into paragraphs based on new lines
    const paragraphs = description.split('\n').filter(para => para.trim() !== '');

    // Map each paragraph to a <p> element
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="card-text job-card-section-text-size">{paragraph}</p>
    ));
  }

  return (
    <div className="card job-card-section">
      <div className="card-body job-page-card-section-body job-card-body">
        <h5 className="card-title job-card-section-title">{title}</h5>
        <p className="card-text job-card-section-text-size">
          {formatDescription(description)}
        </p>
      </div>
    </div>
  );
}
