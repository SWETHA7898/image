import ReactDom from "react-dom/client"
import one from "./assests/images/one.jpg"
import two from "./assests/images/two.jpg"
import three  from "./assests/images/three.jpg"
import four from "./assests/images/four.jpg"
import five from "./assests/images/five.jpg"


import six from "./assests/images/six.jpg"
import "./style2.css"

const root = ReactDom.createRoot(document.getElementById("root"))

function Images() {
  return (
    <div className="container">
      <div className="one">
        <img src={one} alt="one"  style={{width:"100%",height:"90%"}}></img>
        <p>Sunflower</p>

      </div>
      <div className="one">
        <img src={two} alt="one"  style={{width:"100%",height:"90%"}}></img>
        <p> Blossom</p>

      </div>
      <div className="one">
        <img src={three} alt="one"  style={{width:"100%",height:"90%"}}></img>
        <p>Rose plant</p>

      </div>
      <div className="one">
        <img src={four} alt="one"  style={{width:"100%",height:"90%"}}></img>
        <p> Red Rose </p>

      </div>
      <div className="one">
        <img src={one} alt="one"  style={{width:"100%",height:"90%"}}></img>
        <p>Sunflower</p>

      </div>
      <div className="one">
        <img src={four} alt="one"  style={{width:"100%",height:"90%"}}></img>
        <p> Red Rose</p>

      </div>
      <div className="one">
        <img src={six} alt="one"  style={{width:"100%",height:"90%"}}></img>
        <p>Daisy</p>

      </div>
      <div className="one">
        <img src={five} alt="one"  style={{width:"100%",height:"90%"}}></img>
        <p>Tulips</p>

      </div>
      


    </div>
  )
}



root.render(<Images></Images>)