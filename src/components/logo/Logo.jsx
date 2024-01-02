import logo from "/logo.png";

export function Logo({width="100px"}) {
  return (
      <img src={logo} className={width} alt={"company-logo"}/>
  )
}