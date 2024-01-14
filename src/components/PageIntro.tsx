import classNames from 'classnames';

import { FadeIn } from './FadeIn';

export function PageIntro({ eyebrow, title, children, centered = false }: any) {
  return (
    <div
      className={classNames(
        'mt-24 sm:mt-32 lg:mt-40',
        centered && 'text-center'
      )}>
      <FadeIn>
        <h1>
          <span className="font-display block text-base font-semibold">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={classNames(
              'font-display mt-6 block max-w-5xl text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-5xl',
              centered && 'mx-auto'
            )}>
            {title}
          </span>
        </h1>
        <div
          className={classNames(
            'mt-6 max-w-3xl text-lg',
            centered && 'mx-auto'
          )}>
          {children}
        </div>
      </FadeIn>
    </div>
  );
}

export {};
