import { Fragment } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useSelector,useDispatch } from 'react-redux';
import { upDateData } from '../Utils/Store';
const CardItem =(props)=>{
  const img = props.image;
  const data = useSelector((state=>state.Notes))
  const dispatch = useDispatch();
  const addToCart=()=>{
    dispatch(upDateData(props));
    console.log(data)

  }
    return (
        <Fragment>
<Card sx={{ width: {sm:340},m:1.2}}>
      <CardMedia
        component="img"
        height="400"
        image={`${img}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{height:110}}>
          {props.title}
        </Typography>
        <Typography variant="h4" sx={{color:'black'}}>
          ${props.price}
        </Typography>
        <Typography variant="h4" sx={{color:'black'}}> 
        <Rating name="read-only" value={props.rating.rate} readOnly />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addToCart}>Add To Cart</Button>
       <Link to={`${props.id}`}> <Button size="small" sx={{textDecoration:'none'}}>See Details</Button></Link>
      </CardActions>
    </Card>
        </Fragment>
    )
}
export default CardItem;