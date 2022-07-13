    import { Fragment,useEffect,useState} from "react"
import CardItem from "./CardItem";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const ShowAllCards=()=>{    
    const [products,setProducts] = useState({})
    const [load,setLoad] = useState(true)
    function getData(){
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(res=>{
            setProducts(res);
            setLoad(false); 
        }
        
        )
        console.log(products)
    }
    useEffect(()=>{
        getData();
    },[])
    const setData=()=>{
    console.log(products)
    }
    
    return(
        <Fragment>
            <Box sx={{display:{sm:'flex'},
            flexWrap:'wrap',
            m:{md:10,sm:0}
            }}>
                    


            {!load?( products.map(name => <CardItem key={name.id} title={name.title}
            image={name.image} price={name.price} rating={name.rating} id={name.id}
            />)):(<CircularProgress/>)}
            </Box>
        </Fragment>
    )
}
export default ShowAllCards;