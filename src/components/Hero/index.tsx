import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

import { CLASS_HERO_ANIMATION, DELAY_HERO_ANIMATION } from '~@data/heroData';

import Row from '~@components/Row';

type THero = {
  total?: number;
  children: React.ReactNode;
  background?: string;
};

const Hero = ({ total = 0, children }: THero) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = useMemo(() => {
    if (!Array.isArray(children)) return [children];
    return children;
  }, [children]);

  const intervalIndex = useRef<NodeJS.Timer | null>(null);
  const timeoutIndex = useRef<NodeJS.Timer | null>(null);
  const animationDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!Array.isArray(children)) return;

    intervalIndex.current = setInterval(() => {
      if (!animationDiv.current) return;
      const { classList } = animationDiv.current;

      // Add effect's class
      classList.add(CLASS_HERO_ANIMATION);

      timeoutIndex.current = setTimeout(() => {
        // Remove effect's class, do the effect again
        classList.remove(CLASS_HERO_ANIMATION);

        // Change
        setActiveSlide(prevState => (prevState < total - 1 ? prevState + 1 : 0));

        const removedSlide = slides.splice(0, 1);
        slides.push(removedSlide[0]);
      }, DELAY_HERO_ANIMATION / 2);
    }, DELAY_HERO_ANIMATION);

    return () => {
      if (intervalIndex.current) clearInterval(intervalIndex.current);
      if (timeoutIndex.current) clearTimeout(timeoutIndex.current);
    };
  }, [children, slides, total]);

  const handleClick = (index: number) => () => {
    if (!Array.isArray(children)) return;

    if (intervalIndex.current) clearInterval(intervalIndex.current);
    if (timeoutIndex.current) clearTimeout(timeoutIndex.current);
    if (!animationDiv.current) return;

    const { classList } = animationDiv.current;
    classList.remove(CLASS_HERO_ANIMATION);

    const removed = slides.splice(0, index);
    slides.push(...removed);

    setActiveSlide(index);

    // TODO: DRY, Its using this callback twice
    intervalIndex.current = setInterval(() => {
      if (!animationDiv.current) return;
      const { classList } = animationDiv.current;

      // Add effect's class
      classList.add(CLASS_HERO_ANIMATION);

      timeoutIndex.current = setTimeout(() => {
        // Remove effect's class, do the effect again
        classList.remove(CLASS_HERO_ANIMATION);

        // Change
        setActiveSlide(prevState => (prevState < total - 1 ? prevState + 1 : 0));

        const removedSlide = slides.splice(0, 1);
        slides.push(removedSlide[0]);
      }, DELAY_HERO_ANIMATION / 2);
    }, DELAY_HERO_ANIMATION);
  };

  return (
    <Row
      flex
      className={clsx(
        'relative col-span-12 flex h-screen w-full flex-col overflow-x-hidden',
        'before:absolute before:inset-0 before:bg-brutal-black/75',
      )}
    >
      {slides && (
        <>
          <div
            ref={animationDiv}
            className={clsx(
              'relative flex flex-nowrap',
              'bg-gradient-to-r from-brutal-seafoam to-brutal-purple bg-clip-text',
            )}
            style={{ animationDuration: `${DELAY_HERO_ANIMATION}ms` }}
          >
            {slides}
          </div>
          <div className="absolute bottom-0 flex w-full justify-center gap-1 py-4 px-2">
            {total &&
              slides.map((_, index) => (
                <span
                  key={index}
                  className="relative h-1 w-10 cursor-pointer rounded-full bg-white/50"
                  onClick={handleClick(index)}
                >
                  {activeSlide == index ? (
                    <span
                      style={{ animationDuration: `${DELAY_HERO_ANIMATION}ms` }}
                      className="absolute inset-y-0 left-0 animate-fill rounded-full bg-white"
                    />
                  ) : null}
                </span>
              ))}
          </div>
        </>
      )}
    </Row>
  );
};

export default Hero;
