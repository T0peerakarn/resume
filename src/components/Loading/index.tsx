import Lottie from "lottie-react";
import loading from "@/assets/animations/loading.json";

const Loading = () => {
  const renderOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie {...renderOptions} />;
};

export default Loading;
