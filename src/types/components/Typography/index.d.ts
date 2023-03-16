import { TThemeColors } from '~@types/_app';

type TTypographyProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
  component:
    | React.ComponentType
    | 'li'
    | 'span'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'a';
  variant: TTextVariant;
  size: TTextSize;
  color?: TThemeColors;
};

type TTextVariant = 'display' | 'heading' | 'title' | 'body' | 'label';
type TTextSize = 'large' | 'medium' | 'small';

export { TTextSize, TTextVariant, TTypographyProps };
