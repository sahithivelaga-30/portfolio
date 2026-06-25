import type { ReactNode } from "react";

/**
 * A glass card that flips on hover/focus to reveal a definition on the back.
 * Both faces stay in the DOM, so the back content is always accessible.
 */
export function FlipCard({
  front,
  back,
  className,
  height = "h-[210px]",
}: {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  height?: string;
}) {
  return (
    <div className={`flip ${height} ${className ?? ""}`} tabIndex={0}>
      <div className="flip-inner">
        <div className="flip-face glass hud flex flex-col p-5">{front}</div>
        <div className="flip-face flip-back glass flex flex-col justify-center border-purple/40 bg-purple/[0.06] p-5">
          {back}
        </div>
      </div>
    </div>
  );
}
