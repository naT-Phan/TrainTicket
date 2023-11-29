const { useState, useRef, useEffect } = require("react");

export default function useClickOutSide(
  dom = "button",
  handleFunction = () => {}
) {
  const [show, setShow] = useState(false);
  const nodeRef = useRef();

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        document.querySelector(dom) &&
        !document.querySelector(dom).contains(e.target)
      ) {
        handleFunction();
        setShow(false);
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
