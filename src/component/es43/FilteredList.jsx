import React, { useMemo } from "react";

export const FilteredList = ({ list }) => {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <div>
      <h4>Studenti Maggiorenni:</h4>
      {filteredList &&
        filteredList.map((item, i) => (
          <div key={i}>
            <span>Nome Studente: {item.name}</span>
            <br />
            <span>Matricola: {item.id}</span>
            <br />
            <span>Età: {item.age}</span>
          </div>
        ))}
    </div>
  );
};
