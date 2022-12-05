import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

import Toast, { IToastProps } from '~@components/Toast';

interface IToastContextData {
  /**
   * @function addToast
   * Adds a toast to the list
   * @returns Return de id of the toast created, in case to remove early
   */
  // eslint-disable-next-line no-unused-vars
  addToast(data: IToastProps): string;

  /**
   * @function removeToast
   * Remove a toast from the list early
   * @param number Id of the toast to be removed
   */
  // eslint-disable-next-line no-unused-vars
  removeToast(id: string): void;
}

interface IToast extends IToastProps {
  id: string;
  timedout?: NodeJS.Timeout;
}

const ToastContext = createContext({} as IToastContextData);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastList, setToastList] = useState<IToast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToastList(prevList => prevList.filter(toast => toast.id != id));
  }, []);

  const addToast = useCallback((data: IToastProps) => {
    const id = uuid();
    // setTimeout(() => removeToast(id), 5000);
    const { type, title, description } = data;

    setToastList(prevList => [...prevList, { id, type, title, description }]);

    return id;
  }, []);

  useEffect(() => {
    let timeout = 5000;
    toastList.forEach(toast => {
      if (toast.timedout) return;

      toast.timedout = setTimeout(() => {
        removeToast(toast.id);
      }, timeout);

      timeout += 250;
    });

    return () => {
      toastList.forEach(toast => clearTimeout(toast.timedout));
    };
  }, [removeToast, toastList]);

  useEffect(() => {
    let timeout = 5000;
    toastList.forEach(toast => {
      if (toast.timedout) return;

      toast.timedout = setTimeout(() => {
        removeToast(toast.id);
      }, timeout);

      timeout += 250;
    });

    return () => {
      toastList.forEach(toast => {
        if (toast.timedout) return;

        clearTimeout(toast.timedout);
      });
    };
  }, [removeToast, toastList]);

  return (
    <ToastContext.Provider value={{ addToast: addToast, removeToast: removeToast }}>
      {children}
      <TransitionGroup
        id="toast-container"
        className="fixed bottom-0 right-1/2 z-50 mx-auto flex h-0 w-full translate-x-1/2 flex-col-reverse sm:left-0 sm:right-full sm:w-fit sm:translate-x-0"
      >
        {toastList.length != 0
          ? toastList.map(toast => (
              <CSSTransition key={toast.id} timeout={500} classNames="scale">
                <Toast type={toast.type} title={toast.title} description={toast.description} />
              </CSSTransition>
            ))
          : null}
      </TransitionGroup>
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
