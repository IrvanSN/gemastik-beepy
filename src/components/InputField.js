import React from "react";
import {Box, Input} from "native-base";


const inputField = ({placeholder, borderRadius, shadow, size, ...restProps}) => {
  return (
      <Box borderRadius={borderRadius} shadow={shadow} bg="#FFFFFF">
        <Input borderRadius={borderRadius} borderWidth="0" size={size} {...restProps} />
      </Box>
  )
}

export default InputField;
