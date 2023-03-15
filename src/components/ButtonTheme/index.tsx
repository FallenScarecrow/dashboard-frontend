import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import Button from '~@components/Button';

const ButtonTheme = () => {
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const darkRef = useRef(null);
  const lightRef = useRef(null);
  const nodeRef = currentTheme == 'dark' ? darkRef : lightRef;

  const handleDarkModeToggleClick = () => {
    if (currentTheme == 'dark') setTheme('light');
    else setTheme('dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="h-10 w-10 overflow-hidden border-2 border-brutal-black shadow-neubrutalism shadow-brutal-black">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={currentTheme == 'dark' ? 'DarkTheme' : 'LightTheme'}
          ref={nodeRef}
          timeout={500}
          classNames="spin"
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
        >
          {mounted ? (
            <Button
              ref={nodeRef}
              type="button"
              variant="text"
              icon={currentTheme == 'dark' ? IoSunnySharp : IoMoonSharp}
              onClick={handleDarkModeToggleClick}
            />
          ) : (
            <></>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default ButtonTheme;
