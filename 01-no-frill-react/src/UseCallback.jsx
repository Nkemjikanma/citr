import { useCallback } from "react";

export const DivWithColour = ({ color }) => {
  console.log(`Div with colour ${color}`);

  return (
    <div style={{ margin: 2, width: 75, height: 75, background: color }}></div>
  );
};

export const UseCallbackComponent = () => {
  const callbackClick = useCallback(() => {}, []);

  return (
    <div>
      <button onClick={() => callbackClick}>Re-render here</button>
      <DivWithColour />
    </div>
  );
};
