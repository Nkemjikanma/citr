import { useState, useMemo } from "react";

export const DivWithColour = ({ color }) => {
  console.log(`Div with colour ${color}`);

  return (
    <div style={{ margin: 2, width: 75, height: 75, background: color }}></div>
  );
};

export const UseMemoComponent = () => {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [bgcolour, setBgColour] = useState("red");

  const memoizedColor = useMemo(() => ({ bgcolour }), [bgcolour]);

  return (
    <div>
      <button
        onClick={() => {
          setAppRenderIndex(appRenderIndex + 1);
          setBgColour(setBgColour === "red" ? "blue" : "red");
        }}
      >
        Re-render here
      </button>
      <DivWithColour color={memoizedColor} />
    </div>
  );
};
