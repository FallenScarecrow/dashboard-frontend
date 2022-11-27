import Head from 'next/head';
import { ReactElement } from 'react';

import { NextPageWithLayout } from '~@types/_app';

import SimplePageLayout from '~@layouts/SimplePageLayout';

import Typography from '~@components/Typography';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography component="h2" variant="display" size="large">
        Hello world!
      </Typography>
    </>
  );
};

export default Home;
Home.getLayout = (page: ReactElement) => {
  return <SimplePageLayout>{page}</SimplePageLayout>;
};
