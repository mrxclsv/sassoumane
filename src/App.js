import './App.css';
import 'remixicon/fonts/remixicon.css'

import {
  /* PAGES */ 
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
