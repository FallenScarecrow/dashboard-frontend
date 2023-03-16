import clsx from 'clsx';
import { forwardRef } from 'react';

import { TTypographyProps } from '~@types/components/Typography';

import { typographyClasses } from '~@data/typographyClasses';

import styles from './styles.module.css';

const Typography = forwardRef<HTMLElement, TTypographyProps>((props, ref) => {
  const { children, variant, component, size, color, className, ...rest } = props;

  const Component = component as React.ElementType;

  return (
    <Component
      ref={ref}
      className={clsx(
        'block align-middle font-sans text-brutal-black antialiased',
        typographyClasses[variant][size],
        color && styles[`heading-${color}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
});

Typography.displayName = 'Typography';

export default Typography;
