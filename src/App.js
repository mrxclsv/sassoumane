import './App.css';
import 'remixicon/fonts/remixicon.css'

import { Routes, Route } from 'react-router-dom';
import {
  GoTo,
  /* COMP */ Home,
  /* HOOKS*/ usePartition
} from './utils/components'

function App() {

  const { partition, partitions, page } = usePartition()


  return (
    <div className="App">


      <GoTo />
      {/* =============== HEADER */}
      {/* NAVBAR */}
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      {/* FOOTER */}
    </div>
  );
}

export default App;
