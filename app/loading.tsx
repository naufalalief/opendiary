"use client";
import { Progress } from "@/components/ui/progress";
import React, { useState, useEffect } from "react";

const Loading = (): React.ReactNode => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <Progress value={progress} />;
};

export default Loading;
