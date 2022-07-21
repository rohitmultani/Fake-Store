import { Fragment } from "react"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DropDownMenu from "./DropDownMenu";
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from "react-redux";
import { resetState } from "../Utils/Store";
const Filter=()=>{
  const dispatch = useDispatch();
  const data = useSelector((state=>state.Notes))
  const reset=()=>{
    
dispatch(resetState(!data.reset)); 
  }
    return(
        <Fragment>
            <Box 
        sx={{
          display: 'flex',
          flexWrap:'wrap',
          alignItems: 'center',
          width: 'fit-content',
          border: `1px solid`,
          boxShadow:'10',
          borderRadius: 1,
          m:'auto',
          p:4,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1,
          },
          '& hr': {
            mx: 0.5,
          },    
        }}
      >
        <DropDownMenu name={"rating"} val={['0-1','1-2','2-3','3-4','4-5' ]}/>
        <Divider orientation="vertical" variant="middle" flexItem  />
       
        <DropDownMenu name={"price"} val={['0-20','20-50','50-100','100-200','200-400','400-700']}/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <DropDownMenu name={"category"} val={['jewelery','electronics']}/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button variant="contained" sx={{p:2}} onClick={reset}>Reset</Button>
      </Box>
        </Fragment>
    )
}
export default Filter;