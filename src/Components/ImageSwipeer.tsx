// import Carousel from "react-bootstrap/Carousel";
import Slider2 from "../Assests/Png/slider2.webp";
import Slider3 from "../Assests/Png/slider3.webp";
import Slider4 from "../Assests/Png/slider4.webp";
import Slider5 from "../Assests/Png/slider5.webp";
import Slider6 from "../Assests/Png/slider6.webp";
// import Slider7 from "../Assests/Png/slider7.webp";
import classes from "../Components/component.module.css";

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
  {
    id: 6,
    image: Slider3,
  },
  {
    id: 7,
    image: Slider5,
  },
  {
    id: 8,
    image: Slider3,
  },
  // {
  //   id: 9,
  //   image: Slider7,
  // },
];

// function ImageSwipeer() {
//   return (
//     <Carousel
//       slide={true}
//       className="custom-carousel"
//       controls={false}
//       style={{ height: "auto", overflow: "hidden" }}
//     >
//       {data?.map((ele, ind) => {
//         return (
//           <Carousel.Item key={ind}>
//             <img
//               src={ele.image}
//               alt=""
//               style={{ width: "100%", height: "auto", objectFit: "contain" }}
//             />
//           </Carousel.Item>
//         );
//       })}
//     </Carousel>
//   );
// }

// export default ImageSwipeer;

import { Carousel, ConfigProvider } from "antd";
import { DotPosition } from "antd/es/carousel";
import useThemes from "../Hooks/useThemes";

type ImageSwipeerProps = {
  // dataArr?: string[];
  isDraggable?: boolean;
  dotPosition?: DotPosition;
  dotWidth?: string;
  dotHeight?: string;
  dotActiveWidth?: string;
  autoplay?: boolean;
  speed?: number;
};

const ImageSwipeer = ({
  // dataArr = [],
  isDraggable = false,
  dotPosition = "bottom",
  dotWidth = "12px",
  dotHeight = "12px",
  dotActiveWidth = "12px",
  autoplay = false,
  speed = 800,
}: ImageSwipeerProps) => {
  const getThemeColors = useThemes();

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotWidth: dotWidth,
            dotHeight: dotHeight,
            dotActiveWidth: dotActiveWidth,
          },
        },
      }}
    >
      <Carousel
        autoplay={autoplay}
        draggable={isDraggable}
        dotPosition={dotPosition}
        adaptiveHeight={false}
        speed={speed}
        dots={{
          className: classes.customDots,
        }}
        // style={{ width: "100%", height: "auto" }}
      >
        {data?.map((ele, ind) => {
          return (
            <div
              key={ind}
              // style={{
              //   width: "100%",
              //   height: "auto",
              // }}
            >
              <img
                src={ele.image}
                alt="banner_image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          );
        })}
      </Carousel>
      <style>{`
          .ant-carousel .slick-dots li {
            width: ${dotWidth};
            height: ${dotHeight};
            border-radius: 50%;
            background-color: #222;
            border: 1px solid #7e807f;
          }
          .ant-carousel .slick-dots li.slick-active button{
            background: ${getThemeColors.primaryColor}; 
           
           }
             .ant-carousel .slick-dots li button {
  }

    
           }
        `}</style>
    </ConfigProvider>
  );
};

export default ImageSwipeer;
