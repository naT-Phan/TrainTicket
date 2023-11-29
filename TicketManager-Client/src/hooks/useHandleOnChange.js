import { useState } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../slices/authSlice";
const useHandleOnChange = (initState) => {
  const [formValue, setFormValue] = useState({});
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    dispatch(reset());
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formValue,
    setFormValue,
    handleOnChange,
  };
};

export default useHandleOnChange;
