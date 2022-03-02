import { Circle, Line } from "@visx/shape";
import { Text } from "@visx/text";
import { curveNatural } from "@visx/curve";

const root_notes = [1, 2, 3, 4, 5, 6, 7];

function compute_fill(root, KeyTonality) {
  if (KeyTonality === "MAJOR") {
    switch (root) {
      case 1:
        return "cadetblue";
      case 2:
        return "lavender";
      case 3:
        return "lavender";
      case 4:
        return "cadetblue";
      case 5:
        return "cadetblue";
      case 6:
        return "lavender";
      case 7:
        return "salmon";
      default:
        return "black";
    }
  } else if (KeyTonality === "MINOR")
    switch (root) {
      case 1:
        return "lavender";
      case 2:
        return "salmon";
      case 3:
        return "cadetblue";
      case 4:
        return "lavender";
      case 5:
        return "lavender";
      case 6:
        return "cadetblue";
      case 7:
        return "cadetblue";
      default:
        return "black";
    }
}

export default function Notes() {
  return (
    <>
      <Text x={80} y={60}>
        Major
      </Text>
      {root_notes.map((note) => {
        return (
          <Circle
            key={`note-${note}`}
            className="dot"
            cx={100 * note}
            cy={100}
            r={15}
            fill={compute_fill(note, "MAJOR")}
          />
        );
      })}
      <Text x={80} y={200}>
        Minor
      </Text>
      {root_notes.map((note) => {
        return (
          <Circle
            key={`note-${note}`}
            className="dot"
            cx={100 * note}
            cy={240}
            r={15}
            fill={compute_fill(note, "MINOR")}
          />
        );
      })}
    </>
  );
}
