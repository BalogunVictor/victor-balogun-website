import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonstyle = cva(
  'rounded-full disabled:pointer-events-none disabled:opacity-70 focus:outline-none flex justify-center items-center border',
  {
    defaultVariants: {
      size: 'sm',
      variants: 'normal',
    },
    variants: {
      size: {
        md: 'p-4',
        sm: 'p-2',
      },
      variants: {
        normal: 'text-gray-700 border-gray-200 hover:bg-gray-200',
      },
    },
  }
);

type Props = VariantProps<typeof buttonstyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton = ({
  variants,
  size,
  className,
  children,
  ...rest
}: Props) => {
  const style = buttonstyle({ className, size, variants });
  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};

export {};
