import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InsightHero } from "../../components/InsightComponents";
import JobDetailCard from "../../components/TalentComponents/JobDetailCard";
import JobForm from "../../components/TalentComponents/JobForm";

const api = {
  heroImg: "/CareersHero.png",
};

export default function CareersDetailPage() {
  const [jobDetails, setJobDetails] = useState();

  const { id } = useParams();

  function getJobById(jobId) {
    const backendAPI = import.meta.env.VITE_IG_BACKEND_API;
    return `${backendAPI}get-job-detail/${jobId}`;
  }

  async function downloadJobDetails() {
    const response = await axios.get(getJobById(id));
    setJobDetails(response.data);
  }

  useEffect(() => {
    console.log(id);
  }, []);

  const job = {
    id: 234,
    title: "Software Engineer",
    description: `
        Roles and Responsibilities:
        * Develop new integration processes using Mulesoft to enhance support and enable monitoring capabilities.
        * Monitor production platform for CPU, Memory, and Disk usage, addressing potential issues proactively.
        * Resolve system and data issues in deployed applications within production environments.
        * Deploy Integration applications to Production and Non-Production environments using out-of-the-box deployment tools or Jenkins jobs.

        Experience/Skills Required:
        * Bachelor's degree in Computer Science or equivalent technical education (B.E/B.Tech).
        * Overall 5+ years of experience in IT and 3+ years of relevant experience in Mulesoft.
        * Profound knowledge on the Anypoint Platform, emphasizing strong administrative capabilities.
        * Expertise in API Security, Gateways, and Policies.
        * Proficient in developing and managing RESTful Services, APIs, and associated tools.
        * Solid command of SQL with experience across various databases.

        Experience/Skills Desired:
        * Hands-on experience with Cloudhub 2.0, showcasing advanced proficiency in cloud-based integration.
        * Familiarity with force.com, demonstrating additional capabilities in Salesforce-related operations and support.
        * Additional certifications such as MCD2, MCIA, or MCPA, highlighting a commitment to continuous professional development and mastery of MuleSoft technologies.
        * Automation skills, including expertise in scripting and tools for streamlining operational processes and enhancing efficiency.
    `,
  };

  return (
    <>
      <div
        id="hero-talent-img"
        style={{ backgroundImage: `url(${api.heroImg})` }}
      >
        <InsightHero title="Careers" />
      </div>
      <div className="container">
        <h2>
          Feel free to upload your resume and we will keep you posted on our
          current job openings
        </h2>
      </div>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-6">
            <JobDetailCard
              title={job.title}
              description={job.description}
              tags={job.tags}
            />
          </div>
          <div className="col-md-6">
            <JobForm />
          </div>
        </div>
      </div>
    </>
  );
}
