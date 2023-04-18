import React, { useState, useMemo } from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput placeholder="Search" value={filter.query} onChange={(e) => setFilter({ ...filter, query: e.target.value })}></MyInput>
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue={"Сортировка"}
        option={[
          { value: "title", name: "По названию", id: "1" },
          { value: "body", name: "По описанию", id: "2" },
        ]}></MySelect>
    </div>
  );
};

export default PostFilter;
