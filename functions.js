function generateChordsOfKey(root_note) {
  switch (root_note) {
    case "C":
      return [
        { major: "C", minor: "C" },
        { major: "D", minor: "D" },
        { major: "E", minor: "Eb" },
        { major: "F", minor: "F" },
        { major: "G", minor: "G" },
        { major: "A", minor: "Ab" },
        { major: "B", minor: "Bb" },
      ];

    case "D":
      return [
        { major: "D", minor: "D" },
        { major: "E", minor: "E" },
        { major: "F#", minor: "F" },
        { major: "G", minor: "G" },
        { major: "A", minor: "A" },
        { major: "B", minor: "Bb" },
        { major: "C#", minor: "C" },
      ];
    case "E":
      return [
        { major: "E", minor: "E" },
        { major: "F#", minor: "F#" },
        { major: "G#", minor: "G" },
        { major: "A", minor: "A" },
        { major: "B", minor: "B" },
        { major: "C#", minor: "C" },
        { major: "D#", minor: "D" },
      ];
    case "F":
      return [
        { major: "F", minor: "F" },
        { major: "G", minor: "G" },
        { major: "A", minor: "Ab" },
        { major: "Bb", minor: "Bb" },
        { major: "C", minor: "C" },
        { major: "D", minor: "Db" },
        { major: "E", minor: "Eb" },
      ];
    case "G":
      return [
        { major: "G", minor: "G" },
        { major: "A", minor: "A" },
        { major: "B", minor: "Bb" },
        { major: "C", minor: "C" },
        { major: "D", minor: "D" },
        { major: "E", minor: "Eb" },
        { major: "F#", minor: "F" },
      ];
    case "A":
      return [
        { major: "A", minor: "A" },
        { major: "B", minor: "B" },
        { major: "C#", minor: "C" },
        { major: "D", minor: "D" },
        { major: "E", minor: "E" },
        { major: "F#", minor: "F" },
        { major: "G#", minor: "G" },
      ];
    case "B":
      return [
        { major: "B", minor: "B" },
        { major: "C#", minor: "C#" },
        { major: "D#", minor: "D" },
        { major: "E", minor: "E" },
        { major: "F#", minor: "F#" },
        { major: "G#", minor: "G" },
        { major: "A#", minor: "A" },
      ];
    case "C#":
      return [
        { major: "C#", minor: "C#" },
        { major: "D#", minor: "D#" },
        { major: "E#", minor: "E" },
        { major: "F#", minor: "F#" },
        { major: "G#", minor: "G#" },
        { major: "A#", minor: "A" },
        { major: "B#", minor: "B" },
      ];
    case "D#":
      return [
        { major: "D#", minor: "D#" },
        { major: "E#", minor: "E#" },
        { major: "F#", minor: "F#" },
        { major: "G#", minor: "G#" },
        { major: "A#", minor: "A#" },
        { major: "B", minor: "B" },
        { major: "C#", minor: "C#" },
      ];
    case "E#":
      return [
        { major: "F", minor: "F" },
        { major: "G", minor: "G" },
        { major: "A", minor: "Ab" },
        { major: "Bb", minor: "Bb" },
        { major: "C", minor: "C" },
        { major: "D", minor: "Db" },
        { major: "E", minor: "Eb" },
      ];
    case "F#":
      return [
        { major: "F#", minor: "F#" },
        { major: "G#", minor: "G#" },
        { major: "A#", minor: "A" },
        { major: "B", minor: "B" },
        { major: "C#", minor: "C#" },
        { major: "D#", minor: "D" },
        { major: "E#", minor: "E" },
      ];
    case "G#":
      return [
        { major: "G#", minor: "G#" },
        { major: "A#", minor: "A#" },
        { major: "B#", minor: "B" },
        { major: "C#", minor: "C#" },
        { major: "D#", minor: "D#" },
        { major: "E#", minor: "E" },
        { major: "F", minor: "F#" },
      ];
    case "A#":
      return [
        { major: "Bb", minor: "Bb" },
        { major: "C", minor: "C" },
        { major: "D", minor: "Db" },
        { major: "Eb", minor: "Eb" },
        { major: "F", minor: "F" },
        { major: "G", minor: "Gb" },
        { major: "A", minor: "Ab" },
      ];
    case "B#":
      return [
        { major: "C", minor: "C" },
        { major: "D", minor: "D" },
        { major: "E", minor: "Eb" },
        { major: "F", minor: "F" },
        { major: "G", minor: "G" },
        { major: "A", minor: "Ab" },
        { major: "B", minor: "Bb" },
      ];
    case "Cb":
      return [
        { major: "Cb", minor: "B" },
        { major: "Db", minor: "C#" },
        { major: "Eb", minor: "D" },
        { major: "Fb", minor: "E" },
        { major: "Gb", minor: "F#" },
        { major: "Ab", minor: "G" },
        { major: "Bb", minor: "A" },
      ];

    case "Db":
      return [
        { major: "Db", minor: "Db" },
        { major: "Eb", minor: "Eb" },
        { major: "F", minor: "Fb" },
        { major: "Gb", minor: "Gb" },
        { major: "Ab", minor: "Ab" },
        { major: "Bb", minor: "Bbb" },
        { major: "C", minor: "Cb" },
      ];
    case "Eb":
      return [
        { major: "Eb", minor: "Eb" },
        { major: "F", minor: "F" },
        { major: "G", minor: "Gb" },
        { major: "Ab", minor: "Ab" },
        { major: "Bb", minor: "Bb" },
        { major: "C", minor: "Cb" },
        { major: "D", minor: "Db" },
      ];
    case "Fb":
      return [
        { major: "Fb", minor: "E" },
        { major: "Gb", minor: "F#" },
        { major: "Ab", minor: "G" },
        { major: "Bbb", minor: "A" },
        { major: "Cb", minor: "B" },
        { major: "Db", minor: "C" },
        { major: "Eb", minor: "D" },
      ];
    case "Gb":
      return [
        { major: "Gb", minor: "F#" },
        { major: "Ab", minor: "G#" },
        { major: "Bb", minor: "A" },
        { major: "Cb", minor: "B" },
        { major: "Db", minor: "C#" },
        { major: "Eb", minor: "D" },
        { major: "F", minor: "E" },
      ];
    case "Ab":
      return [
        { major: "Ab", minor: "Ab" },
        { major: "Bb", minor: "Bb" },
        { major: "C", minor: "Cb" },
        { major: "Db", minor: "Db" },
        { major: "Eb", minor: "Eb" },
        { major: "F", minor: "Fb" },
        { major: "G", minor: "Gb" },
      ];
    case "Bb":
      return [
        { major: "Bb", minor: "Bb" },
        { major: "C", minor: "C" },
        { major: "D", minor: "Db" },
        { major: "Eb", minor: "Eb" },
        { major: "F", minor: "F" },
        { major: "G", minor: "Gb" },
        { major: "A", minor: "Ab" },
      ];
    default:
      console.log("ERROR: No key to generate");
  }
}

// One function that handles all tonality specifc information.
function computeNoteInfo(root, KeyTonality) {
  if (KeyTonality === "MAJOR") {
    switch (root) {
      case 1:
        return { fill: "#93acc8", radius: 30, romanNum: "I" };
      case 2:
        return { fill: "lavender", radius: 22, romanNum: "ii" };
      case 3:
        return { fill: "lavender", radius: 22, romanNum: "iii" };
      case 4:
        return { fill: "#93acc8", radius: 30, romanNum: "IV" };
      case 5:
        return { fill: "#93acc8", radius: 30, romanNum: "V" };
      case 6:
        return { fill: "lavender", radius: 22, romanNum: "vi" };
      case 7:
        return { fill: "salmon", radius: 30, romanNum: "vii" };
    }
  } else if (KeyTonality === "MINOR")
    switch (root) {
      case 1:
        return { fill: "lavender", radius: 22, romanNum: "i" };
      case 2:
        return { fill: "salmon", radius: 30, romanNum: "ii" };
      case 3:
        return { fill: "#93acc8", radius: 30, romanNum: "III" };
      case 4:
        return { fill: "lavender", radius: 22, romanNum: "iv" };
      case 5:
        return { fill: "lavender", radius: 22, romanNum: "v" };
      case 6:
        return { fill: "#93acc8", radius: 30, romanNum: "VI" };
      case 7:
        return { fill: "#93acc8", radius: 30, romanNum: "VII" };
    }
}

function formatNoteName(note) {
  switch (note) {
    case "Abb":
      return "G";
    case "Bbb":
      return "A";
    case "Cbb":
      return "Bb";
    case "Dbb":
      return "C";
    case "Ebb":
      return "D";
    case "Fbb":
      return "Eb";
    case "Gbb":
      return "F";
    case "Bbbb":
      return "Ab";
    case "Ebbb":
      return "Db";
    case "A##":
      return "B";
    case "B##":
      return "C#";
    case "C##":
      return "D";
    case "D##":
      return "E";
    case "E##":
      return "F#";
    case "F##":
      return "G";
    case "G##":
      return "A";
    case "C###":
      return "D#";
    case "F###":
      return "G#";
  }
}

function numberToNote(number, key) {
  
}

// Set some JS globals for the following files to interact with. Is this bad? IDK...
var majorChordLables = null;
var minorChordLables = null;

var whiteKeyCircles = null;
var blackKeyCircles = null;
var blackKeyCircles2 = null;

var pianoLabel = null;
