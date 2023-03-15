// export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement | ReactNode) => ReactNode;
};

export type ThemeColors = 'primary' | 'secondary';
export type ThemeStatus = 'error' | 'warning' | 'info' | 'success';
export type TextVariants = 'display' | 'heading' | 'title' | 'body' | 'label';
// export type Sizes = 'large' | 'medium' | 'small';
export type Sizes = 'large' | 'medium' | 'small';
