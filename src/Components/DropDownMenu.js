import * as React from 'react';
import {useState,useEffect,memo} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch,useSelector } from 'react-redux';
import { upDateName } from '../Utils/Store';
import { upDateData } from '../Utils/Store';

const DropDownMenu=(props)=> {
  const dispatch = useDispatch();
  const data = useSelector((state=>state.Notes))
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    console.log(event.target.value)
    setAge(event.target.value);
    dispatch(upDateData(event.target.value));
    dispatch(upDateName(props.name));
    // console.log(age)
  };
//   useEffect(()=>{
//     dispatch(upDateData(0))
//     dispatch(upDateName(0))
//     setAge('')
//   },[data.reset])
  const closeHandler=(event)=>{
    setAge('');
}
  return (
    <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={`${props.name}`}
          onChange={handleChange}
          onBlur={closeHandler}
        >
          {props.val.map((item)=>
          
          <MenuItem  key={item} value={item} > {item}</MenuItem>
          )}
        </Select>
      </FormControl>
      
    </Box>
  );
}
export default DropDownMenu;