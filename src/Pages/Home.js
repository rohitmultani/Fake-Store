import {Fragment} from 'react';
import HomeImage from '../Components/HomeImage';
import NavBar from '../Components/NavBar';
import ShowAllCards from '../Components/ShowAllCards';

function Home() {
  return (
    <Fragment>
    <NavBar/>
    <HomeImage/>
    <ShowAllCards/>
    </Fragment>
  );
}

export default Home;
