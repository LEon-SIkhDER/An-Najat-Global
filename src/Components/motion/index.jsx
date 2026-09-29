import React from 'react';
import { motion } from 'framer-motion';

const EASE_OUT_SOFT = [0.22, 1, 0.36, 1];

/**
 * Reveal: Smoothly fades and lifts elements into view when scrolled into the viewport.
 */
export const Reveal = ({
  children,
  delay = 0,
  y = 24,
  duration = 0.65,
  scale = 1,
  as = 'div',
  className = '',
  style,
}) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: EASE_OUT_SOFT }}
    >
      {children}
    </Component>
  );
};

/**
 * StaggerContainer: Wraps a group of items to animate children in a sequential cascade.
 */
export const StaggerContainer = ({
  children,
  staggerDelay = 0.08,
  className = '',
  as = 'div',
}) => {
  const Component = motion[as] || motion.div;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      {children}
    </Component>
  );
};

/**
 * StaggerItem: Used inside StaggerContainer for cascading grid items.
 */
export const StaggerItem = ({
  children,
  y = 20,
  className = '',
  as = 'div',
}) => {
  const Component = motion[as] || motion.div;

  const itemVariants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE_OUT_SOFT },
    },
  };

  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
};

/**
 * Floaty: Ambient floating drift for decorative stars and motifs.
 */
export const Floaty = ({
  children,
  duration = 6,
  distance = 12,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
