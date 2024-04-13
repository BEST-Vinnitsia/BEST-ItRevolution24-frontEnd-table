import { useState } from 'react';
import { motion, usePresence, MotionProps, MotionStyle } from 'framer-motion';
import { ITable } from '../types/table.type';
import { Block, BlockContainer } from './block';

interface IProps {
  data: ITable;
}

export default function TableRow({ data }: IProps) {
  const [isPresent, safeToRemove] = usePresence();

  const animations: MotionProps & { style: MotionStyle } = {
    layout: true,
    initial: 'out',
    style: {
      // color: 'green',
      position: isPresent ? 'static' : 'absolute',
    } as MotionStyle,
    animate: isPresent ? 'in' : 'out',
    whileTap: 'tapped',
    variants: {
      in: { scaleY: 1, opacity: 1 /*color: 'blue'*/ },
      out: { scaleY: 0, opacity: 0, zIndex: -1 /*color: 'yellow'*/ },
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
        <BlockContainer>
          <Block text={data.commandName} />
          <Block text={data.mainF} />
          <Block text={data.optionF} />
          <Block text={data.design} />
          <Block text={data.presentation} />
          <Block text={data.sum} />
        </BlockContainer>
      </motion.tr>
    </>
  );
}
