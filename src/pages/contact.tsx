import { ReactElement } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';

import { ContactForm } from '@/components/ContactForm';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { Layout } from '@/layout';
import { socialProfile } from '@/lib/Social-Profile';

import { NextPageWithLayout } from './_app';

export function Border({
  className,
  position = 'top',
  invert = false,
  as: Component = 'div',
  ...props
}: any) {
  return (
    <Component
      className={classNames(
        className,
        'relative before:absolute after:absolute',
        invert
          ? 'before:bg-white after:bg-white/10'
          : 'before:bg-gray-500 after:bg-[#97979b]',
        position === 'top' &&
          'before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px',
        position === 'left' &&
          'before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px'
      )}
      {...props}
    />
  );
}

function ContactDetails() {
  return (
    <FadeIn>
      <div className="">
        <h2 className="font-display text-base font-semibold">Personal Info</h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Email', 'balogunmoyinoluwa@gmail.com'],
            ['Telephone', '+2348088988560'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold">{label}</dt>
              <dd>
                <Link
                  className="text-[#97979b] hover:text-white"
                  href={`mailto:${email}`}>
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold">Follow me</h2>
        <ul
          className={classNames('mt-6 flex gap-x-10 text-gray-600')}
          role="list">
          {socialProfile.map((socialMediaProfile) => (
            <li key={socialMediaProfile.link}>
              <Link
                // aria-label={socialMediaProfile}
                className={classNames('transition')}
                href={socialMediaProfile.link}>
                <socialMediaProfile.icon className="h-6 w-6 fill-current" />
              </Link>
            </li>
          ))}
        </ul>
      </Border>
    </FadeIn>
  );
}

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact Balogun Victor - Software Developer</title>
      </Head>
      <Container className="mt-16 sm:mt-32">
        <PageIntro eyebrow="Contact me" title="Let’s work together">
          <p>I can’t wait to hear from you.</p>
        </PageIntro>

        <div className="mt-24 sm:mt-32 lg:mt-40">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <FadeIn>
              <ContactForm />
            </FadeIn>

            <ContactDetails />
          </div>
        </div>
      </Container>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
