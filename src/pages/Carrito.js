import CardList from "../components/CardList/CardList";
import { collection, query, where, getDocs } from "firebase/firestore";
import {useState, useEffect} from 'react';
import { db } from "../firebase/firebaseConfig";

const Home = () => {

    return (
      <div>
       <CardList />   
     </div>
    );
  };
  
  export default Home;
  //