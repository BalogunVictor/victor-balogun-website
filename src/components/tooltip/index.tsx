import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';
import { motion } from 'framer-motion';

type TooltipProps = TippyProps;

export const Tooltip = ({ children, ...props }: TooltipProps) => (
  <Tippy placement="bottom" {...props}>
    <motion.div whileHover={{ scale: 0.9 }}>{children}</motion.div>
  </Tippy>
);
