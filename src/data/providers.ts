import { TProviders } from '~@types/_app';

const providers: TProviders = [
  { id: 'google', src: '/providers/btn_google_light_normal_ios.svg' },
  {
    id: 'github',
    src: '/providers/github-mark-white.svg',
    callback: `https://github.com/login/oauth/authorize?client_id=${
      process.env.SITE_GITHUB_ID
    }&scope=${encodeURIComponent(
      process.env.SITE_GITHUB_SCOPE || '',
    )}&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_URL + '/auth/callback/github')}`,
  },
  { id: 'discord', src: '/providers/discord-mark-white.png' },
];

export { providers };
