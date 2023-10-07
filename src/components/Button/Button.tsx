import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonstyle = cva(
  'rounded-full p-3 text-base font-medium border border-black',
  {
    defaultVariants: {
      size: 'sm',
      variant: 'primary',
    },
    variants: {
      size: {
        lg: 'w-[150px] md:w-[180px]',
        md: 'w-[150px] md:w-[180px]',
        sm: 'w-[147px]',
      },
      variant: {
        primary:
          'bg-transparent text-white duration-300 ease-in hover:scale-90 hover:bg-white hover:text-black',
        secondary:
          'bg-[#0B77C5] leading-5 text-white duration-300 ease-in hover:scale-90',
        tertiary:
          'bg-transparent leading-5 text-black duration-300 ease-in hover:scale-90 hover:bg-black hover:text-white',
      },
    },
  }
);

type Props = VariantProps<typeof buttonstyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({
  size,
  variant,
  className,
  children,
  ...rest
}: Props) => {
  const style = buttonstyle({ className, size, variant });

  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};
