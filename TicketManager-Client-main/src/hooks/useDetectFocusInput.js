import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seatSelector } from "../redux/seatBookingSelector";
import { resetContinueState } from "../slices/seatBookingSlice";

const useDetectFocusInput = (typeInit = "name") => {
  const nodeRef = useRef();
  const focusRef = useRef(false);
  const [err, setErr] = useState("");
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState();
  const [complete, setComplete] = useState(false);
  const type = useRef(typeInit);

  const { wagonBooking } = useSelector(seatSelector);
  useEffect(() => {
    console.log("bookingchange", wagonBooking.continueStatus);
    if (wagonBooking.continueStatus === "missing") checkValue();
    else {
      setErr("");
    }
  }, [wagonBooking.continueStatus]);
  const checkValue = () => {
    //checkname
    if (!value || value.length < 1) {
      setErr("* Vui Lòng nhập trường này");
    }

    if (type.current === "name") {
      console.log(value);
      const nameList = value?.split(" ");
      console.log(nameList);
      if (nameList?.length < 2) {
        setErr("Vui lòng nhập đúng họ tên");
        return false;
      }

      if (nameList?.length >= 2 && nameList[1]?.length < 2) {
        setErr("Vui lòng nhập đúng họ tên");
        return false;
      }
      return true;
    } else if (type.current === "age") {
      if (value?.length > 2) {
        setErr("Vui lòng nhập đúng tuổi");
        return false;
      }

      return true;
    } else if (type.current === "identify") {
      if (value?.length < 9 || value?.length > 11) {
        setErr("Vui lòng nhập đúng CMND/CCCD");
        return false;
      }
      return true;
    } else if (type.current === "ageOrIdentify") {
      if ((value?.length > 2 && value?.length < 9) || value?.length > 11) {
        setErr("Vui lòng nhập đúng thông tin");
        return false;
      }
      return true;
    } else if (type.current === "phoneNumber") {
      if (
        value?.length > 12 ||
        value?.length < 8 ||
        (value?.length > 1 && value[0] !== "0")
      ) {
        setErr("Vui lòng nhập đúng Số điện thoại");
        return false;
      }
    } else if (type.current === "email") {
      if (
        !String(value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setErr("Vui lòng nhập đúng Email");
        return false;
      }
    }
    return true;
  };

  const handleCheckValue = () => {
    if (checkValue(value)) {
      setErr("");
      setComplete(true);
    } else {
      setComplete(false);
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutSite = (e) => {
      if (nodeRef.current && nodeRef.current.contains(e.target)) {
        setErr("");
        dispatch(resetContinueState());
        focusRef.current = true;
      } else if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        if (focusRef.current) {
          console.log("out", value);
          if (checkValue(value)) {
            setErr("");
            setComplete(true);
          } else {
            setComplete(false);
          }
          focusRef.current = false;
        }
      }
    };
    document.addEventListener("click", handleClickOutSite);
    return () => {
      document.removeEventListener("click", handleClickOutSite);
    };
  }, [value]);
  return {
    nodeRef,
    err,
    value,
    setValue,
    complete,
    handleCheckValue,
    type,
  };
};

export default useDetectFocusInput;
