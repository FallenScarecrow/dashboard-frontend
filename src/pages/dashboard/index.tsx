import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

import { NextPageWithLayout } from '~@types/pages/_app';
import { IDashboardProps } from '~@types/pages/dashboard';

import NavLayout from '~@layouts/NavLayout';

import Row from '~@components/Row';
import Typography from '~@components/Typography';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import {
  IoCalendarClearOutline,
  IoCameraOutline,
  IoDesktopOutline,
  IoMailOutline,
  IoPersonCircleOutline,
  IoPersonOutline,
  IoStar,
} from 'react-icons/io5';
import { env } from '~@env/client';
import { useSession } from '~@lib/context/session.context';

const cards = [
  {
    color: 'bg-brutal-orange',
    icon: <IoCalendarClearOutline />,
    title: "Today's Schedules",
    value: 4006,
    message: '10% (last 30 days)',
  },
  {
    color: 'bg-brutal-blue',
    icon: <IoCameraOutline />,
    title: 'Total Schedules',
    value: 61344,
    message: '22% (last 30 days)',
  },
  {
    color: 'bg-brutal-red',
    icon: <IoDesktopOutline />,
    title: 'Number of Meetings',
    value: 34040,
    message: '2% (last 30 days)',
  },
  {
    color: 'bg-brutal-green',
    icon: <IoPersonOutline />,
    title: 'Number of Clients',
    value: 47033,
    message: '0,22% (last 30 days)',
  },
];

const positions = {
  'top-left':
    '-top-2 right-0 scale-0 border-t-8 border-l-8 border-transparent origin-bottom-left border-l-brutal-seafoam',
  left: 'border-r-8 scale-x-0 inset-y-0 right-0 origin-right border-brutal-seafoam',
  bottom: 'border-b-8 scale-y-0 -left-px right-px bottom-0 origin-bottom border-brutal-seafoam',
  'bottom-right':
    'border-b-8 border-r-8 bottom-0 scale-0 -left-2 origin-bottom-right border-transparent border-t-brutal-seafoam border-r-brutal-seafoam',
};

const Bars = ({ position }: { position: 'top-left' | 'left' | 'bottom' | 'bottom-right' }) => {
  return (
    <div
      className={clsx(
        'absolute transition-transform group-hover/post-image:scale-100',
        positions[position],
      )}
    />
  );
};

const Dashboard: NextPageWithLayout = ({ movies }: IDashboardProps) => {
  const { session } = useSession();

  return (
    <>
      <Head>
        <title>Dashboard - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row className="p-4">
        <div className="col-span-4 justify-self-start">
          <Typography
            component="div"
            variant="display"
            size="large"
            className={clsx(
              'relative font-black tracking-widest',
              'before:absolute before:-inset-1 before:top-1/2 before:left-1/2 before:block before:skew-y-1 before:bg-brutal-seafoam',
            )}
          >
            <span className="relative">Welcome back</span>
          </Typography>
          <Typography component="div" variant="title" size="large">
            Looks like you has 3 unread messages
          </Typography>
        </div>
        <div className="col-span-4 col-start-9 flex items-center justify-end gap-2 justify-self-stretch">
          <div className="relative flex aspect-square items-center px-2">
            <IoMailOutline size={40} className="text-brutal-black" />
            <Typography
              component="span"
              size="large"
              variant="label"
              className="absolute top-0.5 right-0.5 flex items-center justify-center rounded-full bg-red-500 text-white"
              style={{ minHeight: '1.25rem', minWidth: '1.25rem' }}
            >
              3
            </Typography>
          </div>
          <div className="flex items-center gap-4 px-2">
            <Image
              src={env.NEXT_PUBLIC_API_URL + '/profile/' + (session?.id || 'teste')}
              alt={session?.displayName || 'teste'}
              width={50}
              height={50}
              className="aspect-square rounded-full"
            />
            <div className="flex flex-col">
              <Typography component="p" variant="title" size="large">
                {session?.displayName || 'Teste'}
              </Typography>
              <Typography
                component={'span'}
                variant="label"
                size="large"
                className="text-brutal-black/60"
              >
                {session?.login || 'john@doe.com'}
              </Typography>
            </div>
          </div>
        </div>
      </Row>
      <Row className="gap-4 p-4">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={clsx(
              'flex flex-col rounded-lg bg-white p-4',
              'col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3',
              '2xl:col-span-2 2xl:translate-x-1/4',
              'border-2 border-brutal-black  shadow-neubrutalism shadow-brutal-black',
              i == 0 && '2xl:col-start-1',
              i == 1 && '2xl:col-start-4',
              i == 2 && '2xl:col-start-7',
              i == 3 && '2xl:col-start-10',
            )}
          >
            <div className="flex items-center gap-2">
              <Typography
                component="span"
                variant="heading"
                size="small"
                className={clsx('rounded-full border-2 border-brutal-black p-2', card.color)}
              >
                {card.icon}
              </Typography>
              <Typography component="h2" variant="heading" size="small">
                {card.title}
              </Typography>
            </div>
            <Typography component="p" variant="display" size="large" className="py-8">
              {card.value}
            </Typography>
            <Typography component="span" variant="title" size="small">
              {card.message}
            </Typography>
          </div>
        ))}
      </Row>
      <section>
        <Typography
          component="h2"
          variant="display"
          size="large"
          className={clsx(
            'relative w-min px-4 font-black tracking-widest',
            'before:absolute before:-inset-1 before:top-1/2 before:left-1/2 before:block before:skew-y-1 before:bg-brutal-seafoam',
          )}
        >
          <span className="relative text-brutal-black">Movies</span>
        </Typography>
        <div className="group relative w-full overflow-x-hidden overscroll-x-contain py-4">
          {/* <div className="grid h-full auto-cols-[calc(8.3333333333%-((11/12)*1.5rem)-0rem)] grid-flow-col flex-nowrap justify-items-stretch gap-6"> */}
          {/* <div
            className={clsx(
              'absolute inset-y-0 z-10 h-full w-[calc(5.5555555555%-((11/12)*1rem)-0rem)] items-center justify-center bg-gradient-to-r from-brutal-black/20 to-transparent text-white',
              'transition-all duration-1000',
              'hidden opacity-0',
              'group-hover:transition-all group-hover:duration-1000',
              'group-hover:flex group-hover:opacity-100',
            )}
          >
            <ImArrowLeft size="5rem" />
          </div> */}
          {/* <div className="grid auto-cols-[calc(4.1666666666%-((11/12)*1rem)-0rem)] grid-flow-col gap-6"> */}
          {/* <div className="grid auto-cols-[calc(5.5555555555%-((11/12)*1rem)-0rem)] grid-flow-col gap-6 self-stretch px-4">
            {movies
              ? movies.results.map(movie => (
                  <div key={movie.id} className="col-span-2 flex cursor-pointer flex-col">
                    <div className="group/post-image relative aspect-[3/4] w-full">
                      <Bars position="top-left" />
                      <Bars position="left" />
                      <Bars position="bottom" />
                      <Bars position="bottom-right" />
                      <div
                        className={clsx(
                          'absolute inset-0 transition-transform',
                          'translate-x-0 translate-y-0',
                          'overflow-hidden rounded-xl border-2  border-brutal-black',
                          // 'group-hover/post-image:-translate-x-2 group-hover/post-image:-translate-y-2',
                        )}
                      >
                        <Image
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                          alt={movie.title}
                          layout="fill"
                          placeholder="blur"
                          blurDataURL={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                          // blurDataURL={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <Typography component="h2" variant="title" size="large">
                        {movie.title}
                      </Typography>
                      <div>
                        <Typography
                          component="span"
                          variant="title"
                          size="large"
                          className="text-shadow-neubrutalism-border text-brutal-yellow"
                        >
                          {movie.vote_average}
                          <IoStar
                            size="1rem"
                            className="drop-shadow-neubrutalism-border ml-2 inline-block"
                          />
                        </Typography>
                      </div>
                    </div>
                  </div>
                ))
              : 'No movies found'}
          </div> */}
          <div className="grid auto-cols-[calc(5.5555555555%-((11/12)*1rem)-0rem)] grid-flow-col gap-6 self-stretch px-4">
            {movies
              ? movies.results.map(movie => (
                  <div
                    key={movie.id}
                    className="col-span-6 flex aspect-video cursor-pointer flex-row overflow-hidden rounded-md border-2 border-brutal-black bg-white"
                  >
                    <div className="relative aspect-[3/4] h-full overflow-hidden border-r-2 border-brutal-black">
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        layout="fill"
                        placeholder="blur"
                        blurDataURL={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                        // blurDataURL={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <Typography component="h2" variant="title" size="large">
                        {movie.title}
                      </Typography>
                      <div className="mt-2 flex items-center">
                        <Typography
                          component="span"
                          variant="title"
                          size="large"
                          className="text-shadow-neubrutalism-border text-brutal-yellow"
                        >
                          {movie.vote_average}
                        </Typography>
                        <IoStar
                          size="1rem"
                          className="drop-shadow-neubrutalism-border ml-2 inline-block text-brutal-yellow"
                        />
                      </div>
                    </div>
                  </div>
                ))
              : 'No movies found'}
          </div>
          {/* <div
            className={clsx(
              'absolute inset-y-0 right-0 z-10 h-full w-[calc(5.5555555555%-((11/12)*1rem)-0rem)] items-center justify-center bg-gradient-to-l from-brutal-black/20 to-transparent text-white',
              'transition-all duration-1000',
              'hidden opacity-0',
              'group-hover:transition-all group-hover:duration-1000',
              'group-hover:flex group-hover:opacity-100',
            )}
          >
            <ImArrowRight size="5rem" />
          </div> */}
        </div>
      </section>
    </>
  );
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

export async function getServerSideProps() {
  const movies = await fetcher(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=628fa58fef5a2c9654596bc5ee1f7ce1&language=pt-BR',
  );

  if (!movies) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movies }, // will be passed to the page component as props
  };
}

export default Dashboard;
Dashboard.getLayout = page => {
  return <NavLayout>{page}</NavLayout>;
};
