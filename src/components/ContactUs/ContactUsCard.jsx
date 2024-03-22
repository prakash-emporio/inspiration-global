export default function ContactUsCard({phone, location}) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-start gap-3 my-5">
        <MailruShareButton>
          <img
            className="object-fit-scale"
            width={100}
            height={100}
            src="/Phone.svg"
            alt="social-icons"
          />
        </MailruShareButton>
        <span className="contact-us-icon-detail">{phone}</span>
      </div>
      <div className="d-flex align-items-center justify-content-start gap-3 my-5">
        <MailruShareButton>
          <img
            className="object-fit-scale"
            width={100}
            height={100}
            src="/Location.svg"
            alt="social-icons"
          />
        </MailruShareButton>
        <span className="contact-us-icon-detail">
          {location}
        </span>
      </div>
    </>
  );
}
