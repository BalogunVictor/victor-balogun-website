import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { Button } from '../Button/Button';
import { Container } from '../Container';

interface HeaderProps {
  panelId: string;
  invert?: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  expanded: boolean;
  onToggle: () => void;
}

interface HtmlTagProps {
  children: ReactNode;
}

export function Header({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
}: HeaderProps) {
  const handleToggleClick = () => {
    onToggle();
  };

  // const HtmlTag: React.FC<HtmlTagProps> = ({ children }) => <>{"<" + children + "/>"}</>
  const Logo = () => (
    <Link aria-label="Home" className="group flex" href="/">
      <h2>{'<'}</h2>
      <h2 className="hidden sm:flex">Victor</h2>
      <h2>{'/>'}</h2>
    </Link>
  );

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-x-8">
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
          <button
            aria-controls={panelId}
            aria-expanded={expanded}
            aria-label="Toggle navigation"
            className={classNames(
              'group -m-2.5 rounded-full p-2.5 transition',
              {
                'hover:bg-gray-100': invert,
                'hover:bg-white/10': !invert,
              }
            )}
            onClick={handleToggleClick}
            type="button">
            <Icon
              className={classNames(
                'h-7 w-7',
                invert
                  ? 'fill-white group-hover:fill-gray-700'
                  : 'fill-white group-hover:fill-gray-100'
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
}
