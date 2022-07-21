import { Fragment,useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import BigCard from "../Components/BigCard";
import CircularProgress from '@mui/material/CircularProgress';
import CardItem from "../Components/CardItem";
import NavBar from "../Components/NavBar";
const Detail=()=>{
    const { anything} = useParams();
    const [products,setProducts] = useState({})
    const [load,setLoad] = useState(true)
    function getData(){
        fetch(`https://fakestoreapi.com/products/${anything}`)
        .then(res=>res.json())
        .then(res=>{
            setProducts(res);
            setLoad(false)
        }
        
        )
        console.log(products)
    }
    useEffect(()=>{
        getData();
    })
    return (
<Fragment>
    <NavBar/>
{/* <CardItem title={products.title} image={products.image} price={products.price}></CardItem> */}.
{!load?(<BigCard data={products} ></BigCard>):(<CircularProgress sx={{mt:30,ml:{xs:20,md:70}}}/>)}

</Fragment>
    );
}
export default Detail;