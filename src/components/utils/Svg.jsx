function Svg({
  className = "ms-2",
  fillColor = "#5912E4",
  position,
  transform, // this is required to rotate the svg
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={position} fill={fillColor} />
    </svg>
  );
}

export { Svg };
