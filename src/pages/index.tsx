import Head from 'next/head';

import { NextPageWithLayout } from '~@types/pages/_app';

import NavLayout from '~@layouts/NavLayout';

import Typography from '~@components/Typography';
import Row from '~@components/Row';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row className="mb-6 gap-4">
        <div className="col-span-12 mb-4">
          <Typography component="div" variant="display" size="large">
            Welcome back
          </Typography>
          <Typography component="div" variant="title" size="medium">
            Looks like you has 3 unread messages
          </Typography>
        </div>
      </Row>
      <Row className="gap-4">
        <div className="relative col-span-12 row-span-2 h-full min-h-[800px] rounded-3xl bg-neutral-800 bg-[url(https://picsum.photos/1638/800)] p-8 2xl:col-span-8" />
        <div className="col-span-12 flex flex-col rounded-3xl bg-primary-200 p-8 md:col-span-6 lg:col-span-3 2xl:col-span-2">
          <div>
            <Typography component="h2" variant="heading" size="small">
              Today&apos;s Bookings
            </Typography>
          </div>
          <div className="my-auto pt-4">
            <Typography component="p" variant="display" size="large">
              4006
            </Typography>
            <Typography component="span" variant="title" size="small">
              10% (last 30 days)
            </Typography>
          </div>
        </div>

        <div className="col-span-12 flex flex-col rounded-3xl bg-secondary-200 p-8 md:col-span-6 lg:col-span-3 2xl:col-span-2">
          <div>
            <Typography component="h2" variant="heading" size="small">
              Total Bookings
            </Typography>
          </div>
          <div className="my-auto pt-4">
            <Typography component="p" variant="display" size="large">
              61344
            </Typography>
            <Typography component="span" variant="title" size="small">
              22% (last 30 days)
            </Typography>
          </div>
        </div>

        <div className="col-span-12 flex flex-col rounded-3xl bg-info-200 p-8 md:col-span-6 lg:col-span-3 2xl:col-span-2">
          <div>
            <Typography component="h2" variant="heading" size="small">
              Number of Meetings
            </Typography>
          </div>
          <div className="my-auto pt-4">
            <Typography component="p" variant="display" size="large">
              34040
            </Typography>
            <Typography component="span" variant="title" size="small">
              2% (last 30 days)
            </Typography>
          </div>
        </div>

        <div className="col-span-12 flex flex-col rounded-3xl bg-success-200 p-8 md:col-span-6 lg:col-span-3 2xl:col-span-2">
          <div>
            <Typography component="h2" variant="heading" size="small">
              Number of Clients
            </Typography>
          </div>
          <div className="my-auto pt-4">
            <Typography component="p" variant="display" size="large">
              47033
            </Typography>
            <Typography component="span" variant="title" size="small">
              0,22% (last 30 days)
            </Typography>
          </div>
        </div>
      </Row>
    </>
  );
};

export default Home;
Home.getLayout = page => {
  return <NavLayout>{page}</NavLayout>;
};
