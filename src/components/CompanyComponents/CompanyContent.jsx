export default function CompanyContent({ text, index }) {
  const even = index % 2 === 0;
  return (
    <>
      {!even && (
        <>
          <div className="row g-0 justify-content-between my-2 my-lg-5 py-lg-3">
            {text && (
              <p className="col-lg-7 service-testimonial-text text-white">
                {text}
              </p>
            )}
          </div>
        </>
      )}
      {even && (
        <>
          <div className="row g-0 justify-content-end my-2 my-lg-5 py-lg-3">
            {text && (
              <p className="col-lg-7 service-testimonial-text text-white">
                {text}
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
}
