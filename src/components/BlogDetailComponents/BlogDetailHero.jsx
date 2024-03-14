export default function BlogDetailHero({title}) {
  return (
    <section className="container-fluid mt-0 mb-0">
      <div className="container mt-0 mb-0">
        <div className="row align-items-end justify-content-end g-0 text-end">
          <div className="col">
            <h1 className="text-white">
              {title ? title : "Title Goes Here"}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
