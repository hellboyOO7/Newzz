"use client";

import React from "react";

import { Progress } from "@/components/ui/progress";

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[80%]" />;
};

export default ProgressBar;
