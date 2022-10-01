import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={34}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m17 15.879 6.365 6.363-2.123 2.122-2.742-2.742V30h-3v-8.38l-2.742 2.744-2.122-2.122L17 15.879ZM17 0a10.501 10.501 0 0 1 10.431 9.291 8.25 8.25 0 0 1-1.43 16.176V22.5a9 9 0 0 0-17.995-.337L8 22.5v2.967A8.25 8.25 0 0 1 6.57 9.291 10.5 10.5 0 0 1 17 0Z"
      fill="#1DCD6E"
    />
  </Svg>
)

export default SvgComponent
