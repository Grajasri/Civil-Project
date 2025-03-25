import Carous from "../Carousal/Carous"
import Choose from "../ChooseUs/Choose"
import Rating from "../Ratings/Rating"
import Service from "../Services/Service"
import SmartCon from "../SmartCon/SmartCon"

const Home = () => {
  return (
    <div>
      <Carous/>
      <Service/>
      <Choose/>
      <Rating/>
      <SmartCon/>
    </div>
  )
}

export default Home
