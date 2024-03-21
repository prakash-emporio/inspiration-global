import { InsightHero } from "../../components/InsightComponents";
import JobCard from "../../components/TalentComponents/JobCard";
import CareersHero from "../../assets/CareersHero.png";
import { useNavigate } from "react-router-dom";

const jobCards = [
  {
    id: 234,
    title: "Software Engineer",
    description:
      "We seek a Software Engineer to join our team, contributing to software development and maintenance. Your role includes coding, testing, debugging, and integrating applications with third-party services. Successful candidates have server-side logic experience and thrive in collaborative environments.",
  },
  {
    id: 235,
    title: "Data Scientist",
    description:
      "We are looking for a Data Scientist to analyze large amounts of raw information to find patterns that will help improve our company. We will rely on you to build data products to extract valuable business insights. In this role, you should be highly analytical with a knack for analysis, math and statistics.",
  },
  {
    id: 236,
    title: "Product Manager",
    description:
      "We are looking for a Product Manager to join our team and lead the development of our products. You will be responsible for the product planning and execution throughout the Product Lifecycle, including: gathering and prioritizing product and customer requirements, defining the product vision, and working closely with engineering, sales, marketing and support to ensure revenue and customer satisfaction goals are met.",
  },
  {
    id: 237,
    title: "UX Designer",
    description:
      "We are looking for a UX Designer to design software and platforms that meet people’s needs. You will combine interfaces and workflows to enhance user experience. In this role, you should be an analytical and creative designer who is able to grasp user needs and solve problems. A strong portfolio of successful UX and other technical projects is essential.",
  },
  {
    id: 238,
    title: "Sales Manager",
    description:
      "We are looking for a high-performing Sales Manager to help us meet our customer acquisition and revenue growth targets by keeping our company competitive and innovative. You will be responsible for maximizing our sales team potential, crafting sales plans and justifying those to plans to the upper management.",
  },
  {
    id: 239,
    title: "Marketing Manager",
    description:
      "We are looking for a Marketing Manager to develop, establish and maintain marketing strategies to meet organizational objectives. Effective management of the marketing, advertising and promotional activities of the organization.",
  },
  {
    id: 240,
    title: "HR Manager",
    description:
      "We are looking for an HR Manager to oversee all aspects of human resources practices and processes. You will support business needs and ensure the proper implementation of company strategy and objectives.",
  },
  {
    id: 241,
    title: "Finance Manager",
    description:
      "We are looking for a Finance Manager to provide financial advice and support to clients and colleagues to enable them to make sound business decisions.",
  },
  {
    id: 242,
    title: "Operations Manager",
    description:
      "We are looking for an Operations Manager to oversee the organization’s ongoing operations and procedures. You will be the company’s second-in-command and responsible for the efficiency of business.",
  },
  {
    id: 243,
    title: "Customer Service Manager",
    description:
      "We are looking for a Customer Service Manager to provide excellent customer service and to promote this idea throughout the organization. The goal is to keep the department running in an efficient and profitable manner, to increase customer satisfaction, loyalty and retention and to meet their expectations.",
  },
  {
    id: 244,
    title: "Quality Assurance Manager",
    description:
      "We are looking for a Quality Assurance Manager to ensure that our products and services meet all necessary requirements before they reach the consumer.",
  },
  {
    id: 245,
    title: "Legal Manager",
    description:
      "We are looking for a Legal Manager to be responsible for providing legal advice and support to clients and colleagues. You will be responsible for the effective and efficient management of the Legal department, provision of legal services and ensuring effective management of legal and contractual risks.",
  },
  {
    id: 246,
    title: "Procurement Manager",
    description:
      "We are looking for a Procurement Manager to manage our company’s supply of products and services. Your responsibilities include strategizing to find cost-effective deals and suppliers. The Procurement Manager’s duty is to discover the best ways to cut procurement expenses, so that the company can invest in growth and people.",
  },
  {
    id: 247,
    title: "Logistics Manager",
    description:
      "We are looking for a Logistics Manager to be responsible for the overall supply chain management. Logistics Manager responsibilities include organizing and monitoring storage and distribution of goods. The goal is to manage the entire order cycle so as to enhance business development and ensure sustainability and customer satisfaction.",
  },
  {
    id: 248,
    title: "Supply Chain Manager",
    description:
      "We are looking for a Supply Chain Manager to be responsible for the overall supply chain management. Supply Chain Manager responsibilities include organizing and monitoring storage and distribution of goods. The goal is to manage the entire order cycle so as to enhance business development and ensure sustainability and customer satisfaction.",
  }
];

export default function CareersPage() {
  const navigator = useNavigate();

  function handleClick(id) {
    navigator(`/careers/${id}`);
  }

  return (
    <>
      <div
        id="hero-talent-img"
        style={{ backgroundImage: `url(${CareersHero})` }}
      >
        <InsightHero title="Careers" />
      </div>
      <div className="container">
        <h2 className="text-center fw-bold">Current Openings</h2>
      </div>
      <div className="container">
        <div className="row g-5">
          {jobCards &&
            jobCards.map((job) => (
              <div className="col-md-6 py-2" onClick={() => handleClick(job.id)}>
                <JobCard
                  key={job.id}
                  title={job.title}
                  description={job.description}
                />
              </div>
            ))}
        </div>
      </div>
      {/* Pagination */}
      {/* <div className="container">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  );
}
