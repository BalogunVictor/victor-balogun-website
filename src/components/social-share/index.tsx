import React, { ReactNode } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import {
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

type Props = {
  url: string;
  iconWrapper: React.FC<{ children: ReactNode }>;
};

const shares = [
  {
    button: TwitterShareButton,
    icon: AiOutlineTwitter,
  },
  {
    button: LinkedinShareButton,
    icon: FaLinkedinIn,
  },
  {
    button: WhatsappShareButton,
    icon: IoLogoWhatsapp,
  },
  {
    button: TelegramShareButton,
    icon: BsTelegram,
  },
];

export const SocialShare: React.FC<Props> = ({
  url,
  iconWrapper: IconWrapper,
}) => {
  return (
    <>
      {shares.map(({ button: Button, icon: Icon }, index) => (
        <Button key={index} url={url}>
          <IconWrapper>
            <Icon className="fill-black" />
          </IconWrapper>
        </Button>
      ))}
    </>
  );
};
