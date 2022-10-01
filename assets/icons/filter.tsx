import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 7a7 7 0 0 1 7-7h26a7 7 0 0 1 7 7v26a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7Z"
      fill="#1DCD6E"
    />
  </Svg>
)

export default SvgComponent
