import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={45}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={45} height={45} rx={12} fill="#1DCD6E" />
    <Path
      fill="#fff"
      d="M15 14.823h15v3H15zM11 20.823h23v3H11zM15 26.823h15v3H15z"
    />
  </Svg>
)

export default SvgComponent
