const fs = require("fs");

const files = [
  "public/index.html",
  "worker/worker.js",
  "README.md"
];

const fixes = [
  ["\u00E2\u20AC\u00A2", "\u2022"],
  ["\u00E2\u2020\u2019", "\u2192"],
  ["\u00E2\u20AC\u201C", "\u2013"],
  ["\u00E2\u20AC\u201D", "\u2014"],
  ["\u00E2\u20AC\u0153", "\u201C"],
  ["\u00E2\u20AC\u009D", "\u201D"],
  ["\u00E2\u20AC\u02DC", "\u2018"],
  ["\u00E2\u20AC\u2122", "\u2019"],
  ["\u00C2\u00A0", " "],
  ["\u00C2\u00BA", "\u00BA"],
  ["\u00C2\u00AA", "\u00AA"],

  ["\u00C3\u00A1", "\u00E1"],
  ["\u00C3\u00A0", "\u00E0"],
  ["\u00C3\u00A2", "\u00E2"],
  ["\u00C3\u00A3", "\u00E3"],
  ["\u00C3\u00A9", "\u00E9"],
  ["\u00C3\u00AA", "\u00EA"],
  ["\u00C3\u00AD", "\u00ED"],
  ["\u00C3\u00B3", "\u00F3"],
  ["\u00C3\u00B4", "\u00F4"],
  ["\u00C3\u00B5", "\u00F5"],
  ["\u00C3\u00BA", "\u00FA"],
  ["\u00C3\u00A7", "\u00E7"],

  ["\u00C3\u0081", "\u00C1"],
  ["\u00C3\u0080", "\u00C0"],
  ["\u00C3\u0082", "\u00C2"],
  ["\u00C3\u0083", "\u00C3"],
  ["\u00C3\u0089", "\u00C9"],
  ["\u00C3\u008A", "\u00CA"],
  ["\u00C3\u008D", "\u00CD"],
  ["\u00C3\u0093", "\u00D3"],
  ["\u00C3\u0094", "\u00D4"],
  ["\u00C3\u0095", "\u00D5"],
  ["\u00C3\u009A", "\u00DA"],
  ["\u00C3\u0087", "\u00C7"]
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;

  let text = fs.readFileSync(file, "utf8");

  for (const [bad, good] of fixes) {
    text = text.split(bad).join(good);
  }

  fs.writeFileSync(file, text, { encoding: "utf8" });
  console.log("Corrigido:", file);
}
