'use client';

import { createContext, useContext } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const FadeInStaggerContext = createContext(false);

const viewport = { margin: '0px 0px -200px', once: true };

export function FadeIn(props: any) {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            viewport,
            whileInView: 'visible',
          })}
      {...props}
    />
  );
}

export function FadeInStagger({ faster = false, ...props }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        viewport={viewport}
        whileInView="visible"
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
