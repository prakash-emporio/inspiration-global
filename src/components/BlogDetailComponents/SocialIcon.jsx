import "./BlogDetail.css";
import {
  FacebookShareButton,
  PinterestShareButton,
  LinkedinShareButton,
  MailruShareButton,
  TwitterShareButton,
} from "react-share";

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
        <FacebookShareButton url="https://www.facebook.com/">
          <img
            className="object-fit-scale social-icon-img"
            width={50}
            height={50}
            src="/FacebookBlog.png"
            alt="social-icons"
          />
        </FacebookShareButton>
        <LinkedinShareButton url="https://www.linkedin.com/">
          <img
            className="object-fit-scale social-icon-img"
            width={50}
            height={50}
            src="/LinkedInBlog.png"
            alt="social-icons"
          />
        </LinkedinShareButton>
        <PinterestShareButton media="" url="https://www.pinterest.com/">
          <img
            className="object-fit-scale social-icon-img"
            width={50}
            height={50}
            src="/PinterestBlog.png"
            alt="social-icons"
          />
        </PinterestShareButton>
        <TwitterShareButton url="https://www.twitter.com/">
          <img
            className="object-fit-scale social-icon-img"
            width={50}
            height={50}
            src="/XBlog.png"
            alt="social-icons"
          />
        </TwitterShareButton>
        <MailruShareButton>
          <img
            className="object-fit-scale social-icon-img"
            width={50}
            height={50}
            src="/MailBlog.png"
            alt="social-icons"
          />
        </MailruShareButton>
      </div>
    </div>
  );
}
