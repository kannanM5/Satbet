import React from "react";
import classes from "../Components/component.module.css";

type BouncingDotsLoaderProps = {
  noOfBalls: number;
  style?: React.CSSProperties;
};

const BouncingDotsLoader = ({ noOfBalls, style }: BouncingDotsLoaderProps) => {
  return (
    <div
      style={style}
      className={`d-flex justify-content-center ${classes.bouncingLoader}`}
    >
      {[...new Array(noOfBalls)]?.map((ele, ind) => {
        return <div key={ind}></div>;
      })}
    </div>
  );
};

export default BouncingDotsLoader;
