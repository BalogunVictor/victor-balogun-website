import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const inputStyles = cva(
  'w-full appearance-none text-gray-700 rounded-md border px-3 shadow-md  sm:text-sm  focus:outline-none focus:ring-4',
  {
    defaultVariants: {
      error: false,
      intent: 'normal',
      size: 'md',
    },
    variants: {
      error: {
        true: '!border-rose-500',
      },
      intent: {
        normal:
          'border-gray-900/10 shadow-gray-800/5 placeholder:text-gray-400 focus:border-teal-500  focus:ring-teal-500/10 ',
      },
      size: {
        lg: 'h-16',
        md: 'h-10',
      },
    },
  }
);

export type InputProps = Omit<VariantProps<typeof inputStyles>, 'error'> & {
  label?: string;
  loading?: boolean;
  error?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
} & Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size'
  >;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, intent, size, className, rightIcon, leftIcon, ...rest },
    ref
  ) => {
    return (
      <div>
        {label && (
          <label
            className="mb-2 block text-sm font-medium leading-6 text-gray-900"
            htmlFor={rest.id}>
            {label}
          </label>
        )}
        <div className="relative rounded-md shadow-sm">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {leftIcon}
            </div>
          )}
          <input
            className={classNames(
              inputStyles({ className, error: !!error, intent, size }),
              {
                'pl-8': leftIcon,
                'pr-8': rightIcon || !!error,
              }
            )}
            ref={ref}
            {...rest}
          />
          {error ? (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <HiInformationCircle className="text-rose-500" />
            </div>
          ) : (
            rightIcon && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                {rightIcon}
              </div>
            )
          )}
        </div>

        {error && <p className="mt-2 text-sm text-rose-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
