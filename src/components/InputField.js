import React from "react";
import {Box, Input} from "native-base";


const inputField = ({type, placeholder, borderRadius, shadow, size, ...restProps}) => {
  return (
      <Box mt='1' borderRadius={borderRadius} shadow={shadow} bg="#FFFFFF">
        <Input placeholder={placeholder} borderRadius={borderRadius} borderWidth="0" size={size} {...restProps} />
      </Box>
  )
}

export default inputField;
