import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';

import { Button } from '../Button/Button';

type Props = {
  text: string;
};
export const ClipboardCopy = ({ text }: Props) => {
  return (
    <div className="flex w-full items-center gap-2 overflow-auto rounded border border-black/10 text-sm">
      <p className="w-[100px] flex-1 p-2 text-xs text-black">{text}</p>
      <CopyToClipboard onCopy={() => toast.success('Copied!!!')} text={text}>
        <Button
          className="w-max !rounded-none !border-none"
          variant="secondary">
          Copy
        </Button>
      </CopyToClipboard>
    </div>
  );
};
