import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const cellVariant = {
  dragging: {
    border: '2px dashed #008E95',
  },
  inactive: {
    border: '2px solid #fff',
  },
};

const draggableVariant = {
  dragging: {
    scale: 0.5,
  },
  inactive: {
    scale: 1,
  },
};

const Card = forwardRef(
  ({ index, activeIndex, onDragStart, onDragEnd, isDragging }, ref) => {
    return (
      <motion.div
        className='bg-white rounded-md h-52 w-52 text-gray-900 relative flex justify-center items-center'
        ref={ref}
        id={index}
        variants={cellVariant}
        animate={isDragging ? 'dragging' : 'inactive'}
      >
        {`Cell ${index + 1}`}
        {activeIndex === index && (
          <motion.div
            className='bg-gray-300 h-44 w-44 rounded-md absolute cursor-grab z-10 flex justify-center items-center'
            drag
            variants={draggableVariant}
            animate={isDragging ? 'dragging' : 'inactive'}
            dragElastic={1}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            layoutId='drag'
          >
            Draggable
          </motion.div>
        )}
      </motion.div>
    );
  }
);

export default Card;
