"use client";
import { CSSProperties, FC, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Loading: FC = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#D0E8FF");

  return (
    <div className="">
      <BeatLoader
        color={color}
        loading={loading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
