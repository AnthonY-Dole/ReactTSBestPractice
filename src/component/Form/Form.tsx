import React, { useState } from "react";
import { CustomTextField } from "../Input";

const FastForm = () => {
  const fieldNames = Array.from({ length: 10 }, (v, index) => `field${index}`);

  const [wasSubmitted, setWasSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    const formIsValid = true;
    setWasSubmitted(true);
    if (formIsValid) {
      console.log(`Fast Form Submitted`, fieldValues);
    }
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      {fieldNames.map((name) => (
        <CustomTextField key={name} name={name} wasSubmitted={wasSubmitted} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FastForm;
