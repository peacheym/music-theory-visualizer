import { Circle } from "@visx/shape";

const root_notes = [1, 2, 3, 4, 5, 6, 7];

function compute_fill(root) {
  if (root == 1 || root == 4 || root == 5) {
    return "cadetblue";
  }
  if (root == 2 || root == 3 || root == 6) {
    return "lavender";
  }
  if (root == 7) {
    return "salmon";
  }
}

export default function Notes() {
  return (
    <>
      {root_notes.map((note) => {
        return (
          <Circle
            key={`note-${note}`}
            className="dot"
            cx={100 * note}
            cy={100}
            r={15}
            fill={compute_fill(note)}
          />
        );
      })}
    </>
  );
}
