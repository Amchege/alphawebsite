import { MotionWrapper } from "./motion-wrapper";

interface SlideUpProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  y?: number;
}

export function SlideUp({
  children,
  duration = 0.5,
  delay = 0,
  className,
  y = 20,
}: SlideUpProps) {
  return (
    <MotionWrapper
      {...{
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { duration, delay, ease: "easeOut" },
        className,
      } as any}
    >
      {children}
    </MotionWrapper>
  );
}