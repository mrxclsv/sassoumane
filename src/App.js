import './App.css';
import 'remixicon/fonts/remixicon.css'

import { Routes, Route } from 'react-router-dom';
import {
  /* PAGES */ Clothing, Cosmetics,
  /* COMP */ Navbar,
  /* HOOKS*/ usePartition
} from './utils/components'


function App() {

  const { partition, page } = usePartition()


  return (
    <div className="App">

      {/* GO TO IF PARTITION ++ NULL */}
      {page}

      {/* =============== HEADER */}
      {/* NAVBAR */}
      <Navbar partition={partition} />

      {/* FOOTER */}
    </div>
  );
}

export default App;
