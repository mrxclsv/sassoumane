import { useEffect, useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GoTo } from '../utils/components';

const usePartition = () => {

  const navigate = useNavigate()
  const partitions = ["welcome", "clothing", "cosmetics"];
  const [partition, setPartition] = useState("cosmetics")
  const [page, setPage] = useState(<GoTo />);
  // const activeParts = ["clothing"] /* SET BY DEFAULT TO 1 TO EXCLUDE NULL */
  const activeParts = ["cosmetics"] /* SET BY DEFAULT TO 1 TO EXCLUDE NULL */
  // const activeParts = ["cosmetics", "clothing"] /* SET BY DEFAULT TO 1 TO EXCLUDE NULL */

  useEffect(() => { /* LOG PARTS */
    console.log('Number of site parts ', activeParts.length, " which are: ", activeParts)
  }, [partition])

  useMemo(() => {
    if (partition === "welcome") {
      setPage(<GoTo />);
    }
    else if (partition === "clothing") {
      setPage(<p className="page">"Hello Clothing"</p>);
    }
    else if (partition === "cosmetics") {
      setPage(<p className="page">Hello cosmetics</p>);
    }

    navigate(`/${partition}`)

  }, [navigate, partition])



  return { partitions, partition, page, activeParts }

}

export default usePartition;