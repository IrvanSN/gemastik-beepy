import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="M16.667 18.333H5a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h11.667a.833.833 0 0 1 .833.833v15a.833.833 0 0 1-.833.833Zm-.834-1.666V15H5a.833.833 0 1 0 0 1.667h10.833ZM10 8.333A1.667 1.667 0 1 0 10 5a1.667 1.667 0 0 0 0 3.333Zm-2.5 3.334h5a2.5 2.5 0 1 0-5 0Z"
          fill="#ACB3BF"
      />
    </Svg>
)

export default SvgComponent
