import { ReactNode } from 'react';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

interface CardProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}

export function Card({
  as: Component = 'div',
  className,
  children,
}: CardProps) {
  return (
    <Component
      className={classNames(
        className,
        'group relative flex flex-col items-start'
      )}>
      {children}
    </Component>
  );
}

interface CardLinkProps extends LinkProps {
  children: ReactNode;
}

Card.Link = function CardLink({ children, ...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100  sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

interface CardTitleProps {
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  children: ReactNode;
}

Card.Title = function CardTitle({
  as: Component = 'h2',
  href,
  children,
}: CardTitleProps) {
  return (
    <Component className="text-base font-semibold tracking-tight">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

interface CardDescriptionProps {
  children: ReactNode;
}

Card.Description = function CardDescription({
  children,
}: CardDescriptionProps) {
  return <p className="relative z-10 mt-2 text-sm">{children}</p>;
};
