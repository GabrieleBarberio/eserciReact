import React, { useRef, useEffect, useState } from "react";

function FromCar({ initialValue }) {
  const [isFirstChange, setIsFirstChange] = useState(true);
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const model = formRef.current.elements?.model.value;
    const year = formRef.current.elements?.year.value;
    const color = formRef.current.elements?.color.value;
    console.log(model, year, color);
  };

  const handleFormReset = () => {
    if (isFirstChange) {
      initialValue.model = "";
      initialValue.year = 0;
      initialValue.color = "";
      setIsFirstChange(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    formRef.current.reset();
  }, [initialValue]);

  return (
    <div>
      <h1>Car Details Form</h1>
      <form ref={formRef} onChange={handleFormReset} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="modelInput">Model:</label>
          <input
            type="text"
            id="modelInput"
            name="model"
            defaultValue={initialValue.model}
          />
        </div>
        <div>
          <label htmlFor="yearInput">Year:</label>
          <input
            type="number"
            id="yearInput"
            name="year"
            defaultValue={initialValue.year}
          />
        </div>
        <div>
          <label htmlFor="colorInput">Color:</label>
          <input
            type="text"
            id="colorInput"
            name="color"
            defaultValue={initialValue.color}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FromCar;
