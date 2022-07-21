import { Fragment, useEffect, useState, useCallback, useRef } from "react";
import CardItem from "./CardItem";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { upDate } from "../Utils/Store";

const ShowAllCards = () => {
  // const [products,setProducts] = useState({})
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Notes);
  const dataFetched = useSelector((state) => state.Data);
  const [propertyData, setPropertyData] = useState(undefined);
  const [showData, setShowData] = useState(false);
  const isMounted = useRef(false);
  const isMounted2 = useRef(false);
  const [found, setFound] = useState(true);
  function getData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        // setProducts(res);
        setLoad(false);
        setShowData(true);
        setPropertyData(res);
        dispatch(upDate(res));
        setFound(true);
      });
    // console.log(products)
  }
  const getFilter = useCallback(() => {
    const filteredData = dataFetched.data.filter(
      (item) => {
        switch (data.name) {
          case "rating":
            const rate = data.data.split("-");
            if (item.rating.rate >= rate[0] && item.rating.rate <= rate[1]) {
              return item;
            } else {
              setFound(false);
            }

            break;

          case "category":
            if (item.category === data.data) {
              setFound(true);
              console.log("found");
              return item;
            } else {
              setFound(false);
            }
            break;
          case "price":
            const priceHouse = data.data.split("-");
            setFound(true);
            console.log(priceHouse);
            if (item.price >= priceHouse[0] && item.price <= priceHouse[1]) {
              return item;
            } else {
              setFound(false);
            }
            break;
          case "Search":
            if (
              item.description.includes(data.data) ||
              item.description.includes(data.data)
            ) {
              setFound(true);
              console.log("found");
              return item;
            } else {
              setFound(false);
            }
            break;

          default:
            setFound(false);
            return item;
        }
        return 0;
      },
      [data.data]
    );
    setPropertyData(filteredData);
    // console.log(filterData)
    console.log(filteredData);
    console.log(dataFetched.data);
  });
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (isMounted.current) {
      setTimeout(() => {
        getFilter();
      }, 1000);
      console.log("ks");
      console.log(data.name);
    } else {
      isMounted.current = true;
    }
  }, [data.data]);

  useEffect(() => {
    if (isMounted2.current) {
      setPropertyData(dataFetched.data);
    } else {
      isMounted2.current = true;
    }
  }, [data.reset]);

  return (
    <Fragment>
      <Box
        sx={{ display: { sm: "flex" }, flexWrap: "wrap", m: { md: 10, sm: 0 } }}
      >
        {!load ? (
          propertyData.map((name) => (
            <CardItem
              key={name.id}
              title={name.title}
              image={name.image}
              price={name.price}
              rating={name.rating}
              id={name.id}
            />
          ))
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Fragment>
  );
};
export default ShowAllCards;
