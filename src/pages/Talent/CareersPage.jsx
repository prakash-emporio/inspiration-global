import { InsightHero } from "../../components/InsightComponents";
import insightHero from "/insighthero.png";

export default function CareersPage() {
  return (
    <>
      <div
        id="hero-talent-img"
        style={{ backgroundImage: `url(${insightHero})` }}
      >
        <InsightHero title="Careers" />
      </div>
      <div className="container">
        <h2>
          Feel free to upload your resume and we will keep you posted on our
          current job openings
        </h2>
        <p className="text-center">Coming Soon Stay Tuned</p>
        {/* <form>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Above Information Correct
            </label>
          </div>
          <div className="mb-3">
            <label for="formFile" className="form-label">
              Upload Your Resume
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              accept=".pdf"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form> */}
      </div>
    </>
  );
}
