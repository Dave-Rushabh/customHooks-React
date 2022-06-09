import { useCallback, useEffect, useState } from "react";
import useAvailability from "../customHooks/useAvailability";
import { data } from "./data";
const FurnitureDashboard = () => {
  const [avail, setAvail] = useState(false);
  const [dataa, setDataa] = useState();
  const myAvailability = useAvailability(dataa);

  const handleClick = useCallback((item) => {
    setAvail(true);
    setDataa(item);
  }, []);

  useEffect(() => {}, [handleClick]);
  return (
    <>
      {data.map((item) => (
        <button onClick={() => handleClick(item)} key={item.product}>
          {item.product}
        </button>
      ))}
      <br />
      <br />
      {avail && myAvailability}
    </>
  );
};

export default FurnitureDashboard;
