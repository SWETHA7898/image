import ReactDom from "react-dom/client";
import one from "./assests/images/one.jpg";
import two from "./assests/images/two.jpg";
import three from "./assests/images/three.jpg";
import four from "./assests/images/four.jpg";
import five from "./assests/images/five.jpg";
import six from "./assests/images/six.jpg";
import "./style2.css";

const root = ReactDom.createRoot(document.getElementById("root"));

// Array of image data
const imageData = [
  { src: one, alt: "Sunflower", caption: "Sunflower" },
  { src: two, alt: "Blossom", caption: "Blossom" },
  { src: three, alt: "Rose Plant", caption: "Rose Plant" },
  { src: four, alt: "Red Rose", caption: "Red Rose" },
  { src: five, alt: "Tulips", caption: "Tulips" },
  { src: six, alt: "Daisy", caption: "Daisy" },
  { src: three, alt: "Rose Plant", caption: "Rose Plant" },
  { src: five, alt: "Tulips", caption: "Tulips" },

];

function Images() {
  return (
    <div className="container">
      {imageData.map((image, index) => (
        <div className="one" key={index}>
          <img src={image.src} alt={image.alt} style={{ width: "100%", height: "90%" }} />
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
  );
}

root.render(<Images />);
