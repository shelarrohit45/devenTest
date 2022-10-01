import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={35}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.497 13.618a2.685 2.685 0 0 0-1.014-1.803L19.378.735a3.425 3.425 0 0 0-4.24 0L1.031 11.815a2.706 2.706 0 0 0-.456 3.795 2.706 2.706 0 0 0 3.795.456l11.64-9.144a2.012 2.012 0 0 1 2.493 0l11.64 9.144a2.688 2.688 0 0 0 1.667.576 2.7 2.7 0 0 0 2.686-3.024"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.163 16.953 18.574 8.696a2.14 2.14 0 0 0-2.634 0L5.352 16.953a.708.708 0 0 0-.273.558v9.423A3.07 3.07 0 0 0 8.145 30H26.37a3.07 3.07 0 0 0 3.066-3.066v-9.423c0-.218-.101-.424-.273-.558"
      fill={props.color}
    />
  </Svg>
)

export default SvgComponent
