import { MotionWrapper } from "./motion-wrapper";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export function FadeIn({
  children,
  duration = 0.5,
  delay = 0,
  className,
}: FadeInProps) {
  return (
    <MotionWrapper
      {...{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration, delay, ease: "easeOut" },
        className,
      } as any}
    >
      {children}
    </MotionWrapper>
  );
}