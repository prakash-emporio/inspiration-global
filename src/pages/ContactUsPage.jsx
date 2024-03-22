import { MailruShareButton } from "react-share";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import ContactUsHero from "../components/ContactUs/ContactUsHero";

const api = {
  heroImg: "/ContactUsHero.png",
};

export default function ContactUsPage() {
  return (
    <>
      <div
        id="hero-talent-img"
        style={{ backgroundImage: `url(${api.heroImg})` }}
      >
        <ContactUsHero title="Contact Us" />
      </div>
      <div className="container g-0">
        <div className="row g-5 align-items-center">
          <div className="col">
            <h2 className="contact-us-header px-2">
              Great projects starts with great relationships. Let's talk and start one.
            </h2>
            <div className="d-flex align-items-center justify-content-start gap-3 my-5">
              <MailruShareButton>
                <img
                  className="object-fit-scale"
                  width={100}
                  height={100}
                  src="/MailBlog.png"
                  alt="social-icons"
                />
              </MailruShareButton>
              <span className="contact-us-icon-detail">
                info@inspirationdigital.co
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-start gap-3 my-5">
              <MailruShareButton>
                <img
                  className="object-fit-scale "
                  width={100}
                  height={100}
                  src="/Phone.svg"
                  alt="social-icons"
                />
              </MailruShareButton>
              <span className="contact-us-icon-detail">+1 647 886 2190</span>
            </div>
            <div className="d-flex align-items-center justify-content-start gap-3 my-5">
              <MailruShareButton>
                <img
                  className="object-fit-scale "
                  width={100}
                  height={100}
                  src="/Location.svg"
                  alt="social-icons"
                />
              </MailruShareButton>
              <span className="contact-us-icon-detail">
                1010 North 7th street suite 304-307 Harrisburg, PA 17102
              </span>
            </div>
          </div>
          <div className="col">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </>
  );
}
