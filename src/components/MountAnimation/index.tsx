import { ReactNode, Ref, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const ANIMATION_TIMEOUT = 150;

interface IMountAnimationProps {
  children: ReactNode;
  timeout?: number;
  unmountOnExit?: boolean;
  classNames?: string;
  nodeRef: Ref<HTMLElement | undefined> | undefined;
}

export const MountAnimation = ({
  children,
  timeout = 50000, // MATCH YOUR DEFAULT ANIMATION DURATION
  unmountOnExit = true,
  classNames = 'slide', // ADD YOUR DEFAULT ANIMATION
  nodeRef,
  ...restProps
}: IMountAnimationProps) => {
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
      <>{children}</>
    </CSSTransition>
  );
};
