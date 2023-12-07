import BlogData from "@/data";
import React from "react";
import { useState } from "react";

export default function FilterEntries({ onSearch }) {
  const [selectYear, setSelectYear] = useState(
    BlogData.getYearsAndMonthsSorted()[0]
  );
  const [selectMonth, setSelectMonth] = useState(
    BlogData.getYearsAndMonthsSorted()[0].months
  );

  function yearSelectChangeHandler(evt) {
    const index = BlogData.getYearsAndMonthsSorted().findIndex(
      (item) => item.year === evt.target.value
    );
    setSelectYear(BlogData.getYearsAndMonthsSorted()[index]);
  }

  function monthSelectChangeHandler(evt) {
    setSelectMonth(evt.target.value);
  }

  function SearchHandler(evt) {
    evt.preventDefault();

    if (typeof onSearch === "function") {
      onSearch({ year: selectYear.year, month: selectMonth });
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="inputYear">Year: </label>
        <select
          id="inputYear"
          select={selectYear}
          onChange={yearSelectChangeHandler}
        >
          {BlogData.getYearsAndMonthsSorted().map((item) => {
            return (
              <option value={item.year} key={item.year}>
                {item.year}
              </option>
            );
          })}
        </select>

        <label htmlFor="inputMonth">Month: </label>
        <select id="inputMonth" onChange={monthSelectChangeHandler}>
          {selectYear.months.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>

        <button onClick={SearchHandler}>Search</button>
      </form>
    </div>
  );
}
