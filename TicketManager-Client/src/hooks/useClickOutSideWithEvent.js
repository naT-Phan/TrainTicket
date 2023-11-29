import { useSelector } from "react-redux";
import { citySelector } from "../redux/citySelector";
import { filterSelector } from "../redux/tripSelector";

const { useState, useRef, useEffect } = require("react");

export default function useClickOutSideWithEvent(dom = "button") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef();

  const { city } = useSelector(citySelector);

  const { start, end } = useSelector(filterSelector);
  const handleFunction = () => {
    for (let c of city) {
      if (c.name === start) return true;
    }
    return false;
  };

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        document.querySelector(dom) &&
        !document.querySelector(dom).contains(e.target)
      ) {
        setShow(false);
        if (handleFunction()) {
          console.log("hongssss");
        } else {
          console.log("xdsfdsf");
        }
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
