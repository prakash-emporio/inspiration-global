import CompanyTeamCardAdv from "./CompanyTeamCardAdv.jsx";
import CompanyTeamCardNew from "./CompanyTeamCardNew.jsx";

export default function CompanyTeam() {
  return (
    <div className="container-fluid company-background-color">
      <div className="row">
        <div className="col">
          <h1 className="p-5 text-center company-team-header">Our Team</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 p-lg-5">
          <h1 className="company-team-secondary-header">Mgt.</h1>
        </div>
        <div className="col-lg-8 p-lg-5">
          <CompanyTeamCardNew/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 p-lg-5">
          <h1 className="company-team-secondary-header">Adv.</h1>
        </div>
        <div className="col-lg-8 p-lg-5">
          <CompanyTeamCardAdv/>
        </div>
      </div>
    </div>
  );
}
