import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SOS = (props) => (
    <Svg
        width={62}
        height={54}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="M61.331 50.516 32.894 1.296A2.163 2.163 0 0 0 31 .204c-.738 0-1.477.362-1.893 1.094L.669 50.516c-.84 1.462.212 3.28 1.894 3.28h56.874c1.682 0 2.735-1.818 1.894-3.28ZM28.812 20.438c0-.301.247-.547.547-.547h3.282c.3 0 .547.246.547.547v12.578c0 .3-.247.547-.547.547h-3.282a.549.549 0 0 1-.547-.547V20.438ZM31 44.5a3.281 3.281 0 0 1 0-6.563 3.282 3.282 0 0 1 0 6.563Z"
          fill="red"
      />
    </Svg>
)

export default SOS
