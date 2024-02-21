import { useParams } from 'react-router-dom'
import { NewArrivals, Slider } from "../../utils/components"

const Home1 = ({productID}) => {


  return (
    <div className='page scrollbar-hide bg-white'>
      <Slider />
      <NewArrivals productId={productID} />
    </div>
  )
}

export default Home1