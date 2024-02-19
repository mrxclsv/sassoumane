import { useMemo, useState } from "react";
import { Clothing, Cosmetics, GoTo } from '../utils/components';

const usePartition = () => {

  const partitions = ["welcome", "clothing", "cosmetics"];
  const [partition, setPartition] = useState("cosmetics")
  const [page, setPage] = useState(<GoTo />);
  const activeParts = useMemo(() => ["cosmetics"], []) /* SET BY DEFAULT TO 1 TO EXCLUDE NULL */

  // useEffect(() => { /* LOG PARTS */
  //   console.log('Number of site parts ', activeParts.length, " which are: ", activeParts)
  // }, [activeParts])


  useMemo(() => {
    if (partition === "welcome") {
      setPage(<GoTo />);
      // navigate(`/${partition}`)
    }
    else if (partition === "clothing") {
      setPage(<Clothing />);
      // navigate(`/${partition}`)
    }
    else if (partition === "cosmetics") {
      setPage(<Cosmetics />);
      // navigate(`/${partition}`)
    }

  }, [partition])


  return { partitions, partition, setPartition, page, activeParts }

}

export default usePartition;