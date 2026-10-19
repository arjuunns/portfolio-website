// Pixel "AS" monogram for Arjun Singh.
// Two blocky glyphs on a 64px grid, centered in a 512x256 box.
const AS_PATH = `
  M32 0h192v64H32V0Z
  M32 0h64v256H32V0Z
  M160 0h64v256h-64V0Z
  M32 96h192v64H32v-64Z
  M288 0h192v64H288V0Z
  M288 0h64v128h-64V0Z
  M288 96h192v64H288v-64Z
  M416 128h64v128h-64V128Z
  M288 192h192v64H288v-64Z
`;

export function ArjunMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path fill="currentColor" d={AS_PATH}></path>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="${color}" d="${AS_PATH.replace(/\s+/g, " ").trim()}"/></svg>`;
}
