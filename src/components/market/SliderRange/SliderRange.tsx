import React, { FC, useMemo } from 'react';
import cn from 'clsx';
import { SliderRangeInput } from './SliderRangeInput';
import { getValueByCursor, getValueInRange } from './helpers';
import s from './SliderRange.module.sass';

export type SliderRangeProps = {
  className?: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  label?: string
};

export const SliderRange: FC<SliderRangeProps> = ({ className, value, onChange, min, max, label }) => {
  const range = max - min;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    onChange(getValueByCursor({ max, min, rootWidth: rect.width, cursorClientX: e.clientX, rootClientX: rect.x }));
  };

  const { onStart } = useMemo(() => {
    let rect: DOMRect;

    const mousemove = (e: MouseEvent) => {
      onChange(getValueByCursor({ max, min, rootWidth: rect.width, cursorClientX: e.clientX, rootClientX: rect.x }));
    };

    const touchmove = (e: TouchEvent) => {
      onChange(
        getValueByCursor({ max, min, rootWidth: rect.width, cursorClientX: e.touches[0].clientX, rootClientX: rect.x })
      );
    };

    const end = () => {
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('touchmove', touchmove);
      window.removeEventListener('mouseup', end);
      window.removeEventListener('touchend', end);
    };

    return {
      onStart: (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault();
        rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        window.addEventListener('mousemove', mousemove);
        window.addEventListener('touchmove', touchmove);
        window.addEventListener('mouseup', end);
        window.addEventListener('touchend', end);
      },
    };
  }, [max, min, onChange]);

  const _value = getValueInRange(value, { min, max });
  return (
    <div className={cn(s.root, className)}>
      <div onMouseDown={onStart} onTouchStart={onStart} className={s.field} onClick={onClick}>
        <div className={s.runner} style={{ left: ((_value - min) / range) * 100 + '%' }}></div>
      </div>
      {label && <label htmlFor='sliderInput'>{label}</label>}
      <SliderRangeInput value={value} onChange={onChange} min={min} max={max} />
    </div>
  );
};
