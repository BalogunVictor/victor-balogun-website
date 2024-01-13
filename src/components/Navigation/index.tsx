import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

import { Container } from '../Container';

function NavigationRow({ children }: { children: ReactNode }) {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
}

type NavigationItemProps = LinkProps & {
  children: ReactNode;
};

function NavigationItem({ children, ...rest }: NavigationItemProps) {
  return (
    <Link
      {...rest}
      className="hover- group relative isolate -mx-6 px-6 py-10 text-white even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-white sm:even:pl-16">
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen opacity-0 transition hover:bg-gray-600 group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
}

type NavigationProps = {
  onNavigationItemClick: () => void;
};

const Navigation = ({ onNavigationItemClick }: NavigationProps) => {
  return (
    <Container>
      <nav className="font-display mt-px text-5xl font-medium tracking-tight">
        <NavigationRow>
          <NavigationItem href="/about" onClick={onNavigationItemClick}>
            About Me
          </NavigationItem>
          <NavigationItem href="/resume" onClick={onNavigationItemClick}>
            Resume
          </NavigationItem>
        </NavigationRow>
        <hr className="hidden sm:flex sm:h-px sm:bg-white" />
        <NavigationRow>
          <NavigationItem href="/works" onClick={onNavigationItemClick}>
            Works
          </NavigationItem>
          <NavigationItem href="/contact" onClick={onNavigationItemClick}>
            Hire me
          </NavigationItem>
        </NavigationRow>
      </nav>
    </Container>
  );
};

export default Navigation;
