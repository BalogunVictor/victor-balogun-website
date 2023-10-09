import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface ContainerProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}

export function Container({
  as: Component = 'div',
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={classNames('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      {children}
    </Component>
  );
}
