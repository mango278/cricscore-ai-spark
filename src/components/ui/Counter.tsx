
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const Counter = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) {
        startTime.current = timestamp;
      }

      const progress = timestamp - startTime.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function - ease out cubic
      const easing = 1 - Math.pow(1 - percentage, 3);
      
      const currentCount = Math.floor(easing * end);
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end exactly at the target value
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTime.current = null;
    };
  }, [end, duration]);

  return (
    <div className={cn("font-bold text-4xl animate-count-up", className)}>
      <span className="tabular-nums">{prefix}{count.toLocaleString()}{suffix}</span>
    </div>
  );
};

export default Counter;
