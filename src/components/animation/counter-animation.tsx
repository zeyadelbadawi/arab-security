import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CounterAnimation({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const displayValue = value >= 1000 ? count.toLocaleString() : count;
  const hasDecimal = value % 1 !== 0;
  const displayDecimal = hasDecimal ? (count === value ? value.toFixed(value >= 99 ? 2 : 1) : count.toString()) : displayValue;

  return (
    <span ref={ref} className={className}>
      {prefix}{hasDecimal ? displayDecimal : displayValue}{suffix}
    </span>
  );
}