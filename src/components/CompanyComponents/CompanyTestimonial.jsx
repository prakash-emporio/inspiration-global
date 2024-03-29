import CompanyContent from "./CompanyContent";

export default function CompanyTestimonial() {
  return (
    <div className="container company-content-margin">
      <CompanyContent
        text="To excel in today's rapidly evolving landscape, organizations must
              embrace a culture of perpetual innovation. In an era dominated by
              digital and mobile technologies, individuals increasingly demand
              the ability to engage with businesses on their own terms, within
              the digital realm."
        index={1}
      />
      <CompanyContent
        index={2}
        text="Inspiration Global (IG) is dedicated to partnering with both
              organizations and governments to confront the challenges of this
              digital-first paradigm head-on, offering both project-based
              solutions and talent-related services. IG's expertise spans a wide
              spectrum, ranging from comprehensive IT assessments and strategic
              roadmaps to the development and seamless implementation of
              cutting-edge technologies. The company also specializes in
              conducting rigorous security assessments and implementing
              necessary remediation measures."
      />
      <CompanyContent
        index={3}
        text="With a rich history of crafting, refining, and deploying technology
        and business solutions across the global landscape, IG stands out as
        a trusted partner. In addition to adeptly implementing a diverse
        array of off-the-shelf and Software as a Service (SaaS) solutions,
        IG excels in crafting tailor-made applications, harnessing the power
        of cloud computing, and utilizing analytics and business
        intelligence. These capabilities enable companies to strategically
        align their operations with the ever-evolving demands of both their
        business and customer base, thereby ensuring sustained success."
      />
      <div className="row g-0">
        <div className="col d-flex justify-content-start align-items-center">
          <h2 className="talent-testimonial-header">Certifications</h2>
        </div>
        <div className="col-md-10 col-lg-7 service-testimonial-text text-white">
          <ul className="company-certification-wrapper">
            <li>
              Small Business Certification and Small Diverse Business
              Certification.
            </li>
            <li>Virginia SWaM Certification.</li>
            <li>Rhode Island MBE Certification.</li>
            <li>Michigan, Delaware, and Washington DC</li>
            <li>Pennsylvania ITQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
