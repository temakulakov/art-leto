import React from 'react';
import Header from "./components/Header/Header";
import {useQuery} from "@tanstack/react-query";
import {getList} from "./services/bitrix";
import styles from './App.module.scss'
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import Grid from "./components/Grid/Grid";
import Line from "./components/Line/Line";

function App() {
    const { data } = useQuery({ queryKey: ['list'], queryFn: getList})
  return (
    <div className={styles.root}>
      <Header/>
        <Slider/>
        <Line color={'#F8B501'} word={"Июнь"}/>

        <Line color={'#A31A30'} word={"Июль"}/>
        <Line color={'#038388'} word={"Август"}/>
        <Grid month={1}/>
        <Footer/>
    </div>
  );
}

export default App;
