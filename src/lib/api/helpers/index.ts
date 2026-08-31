export const getDate = (date: string) => {
  const dateObj = new Date(date);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are 0-11
  const year = dateObj.getFullYear();

  return `${day}-${month}-${year}`;
};
