import React, {useState} from "react";
import { Box, Select, CheckIcon } from "native-base";

const Dropdown = (props) => {
  const [value, setValue] = useState('');
  return (
    <Box>
        <Select
            size="l"
            width="100%"
            borderRadius="10px"
            backgroundColor="#ffff"
            selectedValue={value}
            minWidth="200"
            accessibilityLabel="pilih jenis kelamin"
            placeholder={props.placeholder}
            _selectedItem={{
            bg: '#fffff',
            endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setValue(itemValue)}>
            {props.dataPilihan.map((data)=>{
                return(
                    <Select.Item label={data.label} value={data.value} />
                )
            })}
        </Select>
    </Box>
  );
};

export default Dropdown;