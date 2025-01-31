import clsx from 'clsx';
import { ComponentProps } from 'react';

export default function ContentWrapper({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'flex w-full flex-col items-center justify-center',
        !!className && className,
      )}
      {...props}
    >
      <div className="w-full max-w-6xl px-6 md:px-10 lg:px-0">{children}</div>
    </div>
  );
}
