/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useRef, useState } from 'react';

const defineTranslate = (val: number) => 'translate3D(' + val + '%, 0, 0)';

const Navbar = ({ isOpen = false, onCloseNav }: { isOpen?: boolean; onCloseNav?: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizableRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback(() => {
    console.count('startResizing');
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
    if (isOpen != true && containerRef.current && resizableRef.current) {
      console.log(isOpen, containerRef.current, resizableRef.current);
      console.count('stopResizing');
      // Catch percent from translate3D(/-100/%, 0, 0)
      const { x, width } = resizableRef.current.getBoundingClientRect();
      // let x = /-?\d*(?:\.\d*)?(?=%)/.exec(resizableRef.current.style.getPropertyValue('transform'));

      // If moved less than 50% - close
      // If moved more than 50% - open
      const perc = -x / width > 0.5 ? -100 : 0;

      resizableRef.current.style.transform = defineTranslate(perc);
      if (perc == -100) {
        setTimeout(() => containerRef.current?.removeAttribute('open'), 150);
      }
    }
  }, [isOpen]);

  const closeSideBar = useCallback(() => {
    if (containerRef.current && resizableRef.current) {
      console.count('closeSideBar');
      resizableRef.current.style.transform = defineTranslate(-100);
      setTimeout(() => containerRef.current?.removeAttribute('open'), 150);
    }

    onCloseNav && onCloseNav();
  }, [onCloseNav]);

  const resize = useCallback(
    (event: MouseEvent) => {
      if (isResizing && containerRef.current && resizableRef.current) {
        const mouseMove = event.clientX - 10;
        const size = mouseMove > 320 ? 320 : mouseMove < 0 ? 0 : mouseMove;
        const perc = -100 + (size / 320) * 100;

        resizableRef.current.style.transform = defineTranslate(perc);
        containerRef.current.setAttribute('open', '');
      }
    },
    [isResizing],
  );

  useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.setAttribute('open', '');
    }
  }, [isOpen]);

  useEffect(() => {
    console.count('UseEffect');
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);

    return () => {
      console.count('UseEffect CleanUp');
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div
      ref={containerRef}
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="group/side invisible absolute inset-0 z-50 bg-transparent open:visible"
    >
      <div
        className="invisible absolute inset-0 translate-y-0 bg-black/50 transition-opacity group-open/side:visible"
        style={{ transitionDuration: '200ms' }}
        onClick={closeSideBar}
      />
      <div
        className="absolute inset-y-0 left-0 w-60 bg-white p-0 transition-transform ease-linear after:visible after:absolute after:inset-y-0 after:left-full after:w-5 group-open/side:translate-x-0"
        onMouseDown={startResizing}
        style={{
          transform: isOpen ? defineTranslate(0) : defineTranslate(-100),
        }}
        ref={resizableRef}
      >
        <div onMouseDown={e => e.preventDefault()} className="min-h-full w-full">
          <div>
            <img src="" alt="" />
          </div>
          <ul>
            <li>
              <img src="" alt="Logo" />
            </li>
            <li>Home</li>
            <li>Users</li>
            <li>Conferences</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
