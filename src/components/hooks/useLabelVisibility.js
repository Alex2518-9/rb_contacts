import { useState } from "react";

const useLabelVisibility = () => {
  const [visible, setVisible] = useState(false);

  return {
    visible,
    setVisible: () => setVisible(true),
    setInvisible: () => setVisible(false),
  };
};

export { useLabelVisibility };
