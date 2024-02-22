import "./BlogDetail.css";

export default function SocialIcon() {
  const logos = [
    {
      logo: "/FacebookBlog.png",
    },
    {
      logo: "/LinkedInBlog.png",
    },
    {
      logo: "/PinterestBlog.png",
    },
    {
      logo: "/XBlog.png",
    },
    {
      logo: "/MailBlog.png",
    },
  ];
  return (
    <div className="social-icon-container container my-5">
      <div className="d-flex justify-content-evenly align-items-center">
        {logos.map((logo, index) => (
          <img className="object-fit-scale social-icon-img" width={50} height={50} src={logo.logo} alt="social-icons" />
        ))}
      </div>
    </div>
  );
}
