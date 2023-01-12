import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import images from "~/assets/js/Images";
import {useStyles, formControlSX} from "~/styles/SelectBox";
import SelectArrow from "~/components/button/SelectArrow"

const SelectBox = (props)=> {
  const {
    value,
    onChange,
    option
  } = props;
  const classes = useStyles();

  // console.log('option---->>',option);

  return (
    <FormControl sx={formControlSX}>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        IconComponent={() => (
          <SelectArrow />
        )}>
          {option.map((item,index)=>{
            return (
              <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
            )
          })}
      </Select>
    </FormControl>
  )
}
export default SelectBox;