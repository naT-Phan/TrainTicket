export const handleTimeTicket = (value) => {
  if (value >= 24) value = value - 24;
  if (value >= 24) value = value - 24;
  if (value >= 24) value = value - 24;
  let result = value?.toString();
  if (result?.length <= 2) result = result += ":00";
  else {
    result =
      Math.floor(result) +
      ":" +
      (Math.floor(((result % 10) * 10 * 60) / 100) < 10
        ? "0" + Math.floor(((result % 10) * 10 * 60) / 100)
        : Math.floor(((result % 10) * 10 * 60) / 100));
  }

  return result;
};

export const calculateDiscount = (type) => {
  if (type === "Học Sinh / Sinh Viên") {
    return 0.25;
  }
  if (type === "Trẻ em") return 0.5;
  return 0;
};

export const handleTimeTicketMinutes = (value) => {
  let result = value?.toString();
  if (result?.length <= 2) result = result += ":00";
  else {
    result = Math.ceil(result);
  }

  return result;
};

export const handleMoney = (value) => {
  return value?.toLocaleString("it-IT", {
    style: "currency",
    currency: "vnd",
  });
};

export const UnsignedString = (data) => {
  const sample = [
    "aAeEoOuUiIdDyY",
    "áàạảãâấầậẩẫăắằặẳẵ",
    "ÁÀẠẢÃÂẤẦẬẨẪĂẮẰẶẲẴ",
    "éèẹẻẽêếềệểễ",
    "ÉÈẸẺẼÊẾỀỆỂỄ",
    "óòọỏõôốồộổỗơớờợởỡ",
    "ÓÒỌỎÕÔỐỒỘỔỖƠỚỜỢỞỠ",
    "úùụủũưứừựửữ",
    "ÚÙỤỦŨƯỨỪỰỬỮ",
    "íìịỉĩ",
    "ÍÌỊỈĨ",
    "đ",
    "Đ",
    "ýỳỵỷỹ",
    "ÝỲỴỶỸ",
  ];
  if (!data) return data;
  for (let i = 1; i < sample.length; i++) {
    for (let j = 0; j < sample[i].length; j++)
      data = data.replace(sample[i][j], sample[0][i - 1]);
    data = data.toUpperCase();
  }

  return data;
};
