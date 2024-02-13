import React, {
  DetailedHTMLProps,
  forwardRef,
  TextareaHTMLAttributes,
} from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { cva, VariantProps } from 'class-variance-authority';

const textAreaStyles = cva(
  'w-full appearance-none text-gray-700 resize-none p-2 rounded-md border px-3 shadow-md  sm:text-sm  focus:outline-none focus:ring-4',
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
        lg: 'h-56',
        md: 'h-40',
      },
    },
  }
);

export type TextAreaProps = Omit<
  VariantProps<typeof textAreaStyles>,
  'error'
> & {
  label?: string;
  loading?: boolean;
  error?: string;
} & Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    'size'
  >;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, intent, size, className, ...rest }, ref) => {
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
          <textarea
            className={textAreaStyles({
              className,
              error: !!error,
              intent,
              size,
            })}
            ref={ref}
            {...rest}
          />
          {error && (
            <div className="pointer-events-none absolute inset-y-0 right-0  p-3">
              <HiInformationCircle className="text-rose-500" />
            </div>
          )}
        </div>

        {error && <p className="mt-2 text-sm text-rose-500">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
