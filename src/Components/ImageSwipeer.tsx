import Carousel from "react-bootstrap/Carousel";
import Slider2 from "../Assests/Png/slider2.webp";
import Slider3 from "../Assests/Png/slider3.webp";
import Slider4 from "../Assests/Png/slider4.webp";
import Slider5 from "../Assests/Png/slider5.webp";
import Slider6 from "../Assests/Png/slider6.webp";

const data = [
  {
    id: 1,
    image: Slider4,
  },
  {
    id: 2,
    image: Slider2,
  },
  {
    id: 3,
    image: Slider3,
  },
  {
    id: 4,
    image: Slider5,
  },
  {
    id: 5,
    image: Slider6,
  },
];

function ImageSwipeer() {
  return (
    <Carousel
      slide={true}
      className="custom-carousel"
      controls={false}
      style={{ height: "auto" }}
    >
      {data?.map((ele, ind) => {
        return (
          <Carousel.Item key={ind}>
            <img
              src={ele.image}
              alt=""
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ImageSwipeer;
