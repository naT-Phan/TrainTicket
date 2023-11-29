import axios from "axios";
import { apiUrl } from "../utils/utils";

export const getDetailTicket = async (filter) => {
  const url = `${apiUrl}/user/detailTicket`;

  const response = await axios.post(url, {
    phoneNumber: filter.phoneNumber,
    bookingCode: filter.bookingCode,
  });

  console.log(response.data);

  return response.data;
};
