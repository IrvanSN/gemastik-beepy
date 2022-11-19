import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Person = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="M25 45.833C13.494 45.833 4.167 36.506 4.167 25 4.167 13.494 13.494 4.167 25 4.167c11.506 0 20.833 9.327 20.833 20.833 0 11.506-9.327 20.833-20.833 20.833Zm10.417-17.708A3.125 3.125 0 0 0 32.292 25H17.708a3.125 3.125 0 0 0-3.125 3.125v1.042c0 4.106 3.875 8.333 10.417 8.333s10.417-4.227 10.417-8.333v-1.042Zm-4.688-10.938a5.73 5.73 0 1 0-11.458 0 5.73 5.73 0 0 0 11.458 0Z"
          fill="#333"
      />
    </Svg>
)

export default Person
