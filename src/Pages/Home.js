import {Fragment} from 'react';
import Filter from '../Components/Filter';
import HomeImage from '../Components/HomeImage';
import NavBar from '../Components/NavBar';
import ShowAllCards from '../Components/ShowAllCards';

function Home() {
  return (
    <Fragment>
    <NavBar/>
    <HomeImage/>
    <Filter/>
    <ShowAllCards/>
    </Fragment>
  );
}

export default Home;
