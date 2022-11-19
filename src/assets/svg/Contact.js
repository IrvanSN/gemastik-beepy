import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Contact = (props) => (
    <Svg
        width={60}
        height={60}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="M47.5 55H15V5h32.5c2.75 0 5 2.25 5 5v40c0 2.75-2.25 5-5 5Z"
          fill="#006180"
      />
      <Path
          d="M12.5 5H15v50h-2.5c-2.75 0-5-2.25-5-5V10c0-2.75 2.25-5 5-5Z"
          fill="#128000"
      />
      <Path
          d="M32.5 30a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM41.25 37.5s-2.375-5-8.75-5-8.75 5-8.75 5V40h17.5v-2.5Z"
          fill="#fff"
      />
    </Svg>
)

export default Contact
