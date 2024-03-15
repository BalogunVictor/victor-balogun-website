import { FaExternalLinkAlt } from 'react-icons/fa';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  className?: string;
  title: string;
  url: string;
  description: string;
  src: string;
}

const Card = ({
  className,
  title,
  url,
  src,
  description: about,
}: CardProps) => {
  return (
    <>
      <div
        className={classNames(
          'my-16 max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-3xl',
          className
        )}>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              alt="Man looking at item at a store"
              className="h-48 w-full object-cover md:h-full md:w-64"
              height={100}
              src={src}
              width={100}
            />
          </div>
          <div className="p-8">
            <Link href={url}>
              <div className="flex">
                <span className="mt-1 block text-lg font-semibold leading-tight text-black hover:underline">
                  {title}
                </span>
                <FaExternalLinkAlt
                  style={{ color: 'red', fontSize: '16px', marginLeft: '6px' }}
                />
              </div>
            </Link>
            <p className="text-.gray-500 mt-2">{about}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
