import parse from "html-react-parser";
import "./ServiceContent.css";
import "./ServiceHero.css";

export default function ServiceContent({ text }) {
  return <>{parse(text)}</>;
}
