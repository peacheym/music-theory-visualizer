import Chart from "./Chart";
import Notes from "./Notes";
import { withScreenSize } from "@visx/responsive";

let chart = withScreenSize(<Notes />);

function App() {
  return (
    <>
      <svg width={"100%"} height={"2000px"}>
        <Notes/>
        <Chart />
      </svg>
    </>
  );
}

export default App;
