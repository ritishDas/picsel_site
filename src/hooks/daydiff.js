import { useState, useEffect } from "react";

const useDaysDifference = (inputDate) => {
  const [daysDifference, setDaysDifference] = useState(0);

  useEffect(() => {
    const calculateDaysDifference = () => {
      const currentDate = new Date();
      const targetDate = new Date(inputDate);
      const timeDifference = targetDate - currentDate;
      if(timeDifference<0) 
	return -1;
      const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert ms to days
      setDaysDifference(days);
    };

    calculateDaysDifference();
  }, [inputDate]);

  return daysDifference;
};

export default useDaysDifference;
