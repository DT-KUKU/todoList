import { useState } from "react";

export const useInputCustomHook = (initialize) => {
  const [data, setData] = useState(initialize);

  const changeData = (e) => {
    setData(e.target.value);
  };

  const resetData = () => {
    setData("");
  };

  return [data, changeData, resetData];
};
