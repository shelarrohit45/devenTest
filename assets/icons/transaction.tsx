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
      d="M24.767 0H5.233A5.24 5.24 0 0 0 0 5.233v19.534A5.24 5.24 0 0 0 5.233 30h19.534A5.24 5.24 0 0 0 30 24.767V5.233A5.24 5.24 0 0 0 24.767 0Zm-2.79 21.628H6.627a1.046 1.046 0 0 1-.739-1.786l4.187-4.186a1.047 1.047 0 0 1 1.479 1.48l-2.399 2.4h12.822a1.046 1.046 0 0 1 0 2.092Zm2.36-11.809c-.052.127-.129.242-.225.34l-4.186 4.185a1.047 1.047 0 0 1-1.48-1.479l2.399-2.4H8.023a1.046 1.046 0 0 1 0-2.093h15.35a1.046 1.046 0 0 1 .965 1.447Z"
      fill={props.color}
    />
  </Svg>
)

export default SvgComponent
