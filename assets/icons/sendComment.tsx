import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={18} cy={18} r={18} fill="#fff" />
  </Svg>
)

export default SvgComponent