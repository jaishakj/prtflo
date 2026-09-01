interface Props {
  cursorRef: React.RefObject<HTMLDivElement>;
  dotRef: React.RefObject<HTMLDivElement>;
}

export default function CustomCursor({ cursorRef, dotRef }: Props) {
  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
