import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {useQuery} from "@tanstack/react-query";
import {getList} from "./services/bitrix";

function App() {
    const { data } = useQuery({ queryKey: ['list'], queryFn: getList})
  return (
    <div className="App">
      <Header/>

    </div>
  );
}

export default App;
