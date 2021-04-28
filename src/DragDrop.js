import { AnimateSharedLayout, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Card from './Card';

const DragDrop = () => {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const cards = [ref0, ref1, ref2, ref3];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const getActiveCardIndex = (e) => {
    const { point } = e;
    const cardIndex = cards.findIndex((card) => {
      const {
        offsetLeft,
        offsetTop,
        offsetWidth,
        offsetHeight,
        parentElement,
      } = card.current;

      const leftEdge = parentElement.offsetLeft + offsetLeft;
      const rightEdge = parentElement.offsetLeft + offsetLeft + offsetWidth;
      const topEdge = parentElement.offsetTop + offsetTop;
      const bottomEdge = parentElement.offsetTop + offsetTop + offsetHeight;

      return (
        point.x >= leftEdge &&
        point.x <= rightEdge &&
        point.y >= topEdge &&
        point.y <= bottomEdge
      );
    });

    if (cardIndex < 0) return activeIndex;

    return cardIndex;
  };

  const dragStart = () => {
    setIsDragging(true);
  };

  const dragEnd = (_, info) => {
    setIsDragging(false);
    setActiveIndex(getActiveCardIndex(info));
  };

  return (
    <div className='container mx-auto h-screen w-screen'>
      <h1 className='p-4 text-white text-lg'>
        Draggable Element {activeIndex + 1}
      </h1>
      <AnimateSharedLayout>
        <div className='grid gap-2 grid-cols-2 relative justify-center items-center'>
          {cards.map((card, i) => {
            return (
              <Card
                index={i}
                activeIndex={activeIndex}
                onDragStart={dragStart}
                onDragEnd={dragEnd}
                isDragging={isDragging}
                key={`cell-${i}`}
                ref={card}
              />
            );
          })}
        </div>
      </AnimateSharedLayout>
    </div>
  );
};

export default DragDrop;
