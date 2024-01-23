import { useState } from 'react';
import { motion, usePresence, MotionProps, MotionStyle } from 'framer-motion';
import { ITable } from '../types/table.type';

interface IProps {
  data: ITable;
}

export default function TableRow({ data }: IProps) {
  const [isPresent, safeToRemove] = usePresence();

  const animations: MotionProps & { style: MotionStyle } = {
    layout: true,
    initial: 'out',
    style: {
      color: 'green',
      position: isPresent ? 'static' : 'absolute',
    } as MotionStyle,
    animate: isPresent ? 'in' : 'out',
    whileTap: 'tapped',
    variants: {
      in: { scaleY: 1, opacity: 1, color: 'blue' },
      out: { scaleY: 0, opacity: 0, zIndex: -1, color: 'yellow' },
      tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    // Replace 'transition' with the actual definition of your transition object
    transition: {
      // Your transition properties go here
    },
  };

  return (
    <>
      <motion.tr {...animations}>
        <td>{data.commandName}</td>
        <td>{data.functional}</td>
        <td>{data.code}</td>
        <td>{data.design}</td>
        <td>{data.sum}</td>
      </motion.tr>
    </>
  );
}
