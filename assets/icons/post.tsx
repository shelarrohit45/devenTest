import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M24.216 1.093H18.38a1.615 1.615 0 0 0-.133-.251l2.727-.733a3.21 3.21 0 0 1 3.242.984ZM1.093 5.784a3.21 3.21 0 0 0-.984 3.241l.984 3.675V5.784ZM29.891 20.975l-.984-3.675v6.916a3.209 3.209 0 0 0 .984-3.241ZM5.784 28.907a3.21 3.21 0 0 0 3.242.984l3.674-.984H5.784ZM24.628 2.163H18.7c.03.177.045.355.043.535a3.744 3.744 0 0 1-7.488 0c-.002-.18.012-.358.043-.535H5.372a3.21 3.21 0 0 0-3.21 3.21v19.255a3.21 3.21 0 0 0 3.21 3.21h19.256a3.21 3.21 0 0 0 3.21-3.21V5.372a3.21 3.21 0 0 0-3.21-3.21Zm-1.07 16.046H6.442a.535.535 0 0 1 0-1.07h17.116a.535.535 0 0 1 0 1.07Zm0-4.279H6.442a.535.535 0 0 1 0-1.07h17.116a.535.535 0 0 1 0 1.07Zm0-4.279H6.442a.535.535 0 0 1 0-1.07h17.116a.535.535 0 0 1 0 1.07Z"
      fill={props.color}
    />
    <Path
      d="M17.674 2.698a2.674 2.674 0 1 1-5.348 0 2.674 2.674 0 0 1 5.348 0Z"
      fill={props.color}
    />
  </Svg>
)

export default SvgComponent
