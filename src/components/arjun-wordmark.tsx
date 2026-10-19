// Text-based "Arjun Singh" logotype.
export function ArjunWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1700 500"
      fill="none"
      {...props}
    >
      <text
        x="850"
        y="250"
        fill="currentColor"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
        fontWeight="800"
        fontSize="230"
        letterSpacing="-8"
        textLength="1560"
        lengthAdjust="spacingAndGlyphs"
      >
        Arjun Singh
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1700 500" fill="none"><text x="850" y="250" fill="${color}" text-anchor="middle" dominant-baseline="central" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-weight="800" font-size="230" letter-spacing="-8" textLength="1560" lengthAdjust="spacingAndGlyphs">Arjun Singh</text></svg>`;
}
