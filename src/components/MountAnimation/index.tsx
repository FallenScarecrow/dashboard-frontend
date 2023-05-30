import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TMountAnimationProps } from '~@types/components/MountAnimation';

export const ANIMATION_TIMEOUT = 150;

export const MountAnimation = ({
  children,
  timeout = ANIMATION_TIMEOUT, // MATCH YOUR DEFAULT ANIMATION DURATION
  unmountOnExit = true,
  classNames = 'slide', // ADD YOUR DEFAULT ANIMATION
  nodeRef,
  ...restProps
}: TMountAnimationProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <CSSTransition
      in={isMounted}
      timeout={timeout}
      classNames={classNames}
      unmountOnExit={unmountOnExit}
      nodeRef={nodeRef}
      {...restProps}
    >
      {children}
    </CSSTransition>
  );
};
