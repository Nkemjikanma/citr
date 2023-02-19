import { useId } from "react";

const LabelInputPair = () => {
  const id = useId();

  return (
    <div style={{ marginBottom: "50px" }}>
      <label htmlFor={id}>
        click on this label and it will highlight the input{id}
      </label>
      <br />
      <input type="text" id={id} placeholder={`input id: ${id}`} />
    </div>
  );
};

const UseIdComponent = () => {
  return (
    <>
      <LabelInputPair />
      <LabelInputPair />
    </>
  );
};

export default UseIdComponent;
