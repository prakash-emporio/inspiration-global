export default function IndustrySecondCard() {
  return (
    <div className="pb-10 bg-purple-700">
      <h1 className="p-10 text-5xl font-black text-center text-white">
        A Few of Our Capabilities
      </h1>
      <div className="flex gap-10 p-10">
        <article className="text-wrap">
          <h1 className="text-3xl font-bold text-lime-300">
            Talent & <br />Recruitment
          </h1>
          <p className="py-5 text-white">
            We offer strategic consulting services that bring clarity to your
            talent and recruitment efforts, facilitating accelerated growth and
            shaping the future of your business today.
          </p>
        </article>
        <article className="text-wrap">
          <h1 className="text-3xl font-bold text-lime-300">
            Technology & Engineering
          </h1>
          <p className="py-5 text-white">
            Our expertise drives growth through the assessment, enhancement, and
            innovation of your organization's technology utilization, fostering
            continuous improvement.
          </p>
        </article>
        <article className="text-wrap">
          <h1 className="text-3xl font-bold text-lime-300">
            Enterprise <br />Platforms
          </h1>
          <p className="py-5 text-white">
            We amplify the value of your investments in enterprise platforms
            through precise implementation, customization, and optimization
            tailored to your specific needs.
          </p>
        </article>
        <article className="text-wrap">
          <h1 className="text-3xl font-bold text-lime-300">Azure Platform</h1>
          <p className="py-5 mt-8 text-white">
            Elevate your infrastructure to new levels of efficiency and business
            success with our consultancy, migration, optimization, and tailored
            solutions spanning the complete Azure platform.
          </p>
        </article>
      </div>
    </div>
  );
}
