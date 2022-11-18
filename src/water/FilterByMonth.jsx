import React from "react";

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const FilterByMonth = ({ datas, items }) => {
  const days = datas.map((item) => {
    let day = item.Date;
    let month = new Date(day);
    month = month.getMonth();
    return month + 1;
  });
  const unique = days.filter(onlyUnique);
  return (
    <>
      {unique.map((item, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              items(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </>
  );
};
export default FilterByMonth;
