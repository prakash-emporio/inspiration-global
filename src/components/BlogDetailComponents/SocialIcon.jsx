import "./BlogDetail.css";

export default function SocialIcon() {
  const logos = [
    {
      id: 1,
      logo: "/FacebookBlog.png",
    },
    {
      id: 2,
      logo: "/LinkedInBlog.png",
    },
    {
      id: 3,
      logo: "/PinterestBlog.png",
    },
    {
      id: 4,
      logo: "/XBlog.png",
    },
    {
      id: 5,
      logo: "/MailBlog.png",
    },
  ];
  return (
    <div className="social-icon-container container my-5">
      <div className="d-flex justify-content-center gap-4 align-items-center">
        {logos.map((logo) => (
          <img key={logo.id} className="object-fit-scale social-icon-img" width={50} height={50} src={logo.logo} alt="social-icons" />
        ))}
      </div>
    </div>
  );
}
