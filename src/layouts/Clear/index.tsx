import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMailOutline, IoMenuOutline } from 'react-icons/io5';
import Row from '~@components/Row';
import Typography from '~@components/Typography';
import { env } from '~@env/client.mjs';
import { useSession } from '~@lib/context/session.context';

import { TDefaultLayoutProps } from '~@types/layouts';

const Default = ({ children }: TDefaultLayoutProps) => {
  const {
    data: { session },
  } = useSession();

  return (
    <main className="h-screen w-full">
      <Row className="absolute z-50 w-full border-b-2 border-brutal-black bg-white py-2">
        <div className="col-span-4 col-start-9 flex items-center justify-end gap-2 justify-self-stretch">
          {session ? (
            <>
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
                  src={env.NEXT_PUBLIC_API_URL + '/profile/' + session?.id}
                  alt={session?.displayName}
                  width={50}
                  height={50}
                  className="aspect-square rounded-full"
                />
                <div className="flex flex-col">
                  <Typography component="p" variant="title" size="medium">
                    {session?.displayName}
                  </Typography>
                  <Typography
                    component={'span'}
                    variant="label"
                    size="medium"
                    className="text-brutal-black/60"
                  >
                    {session?.login}
                  </Typography>
                </div>
              </div>
            </>
          ) : (
            <Link href={'/login'}>Login</Link>
          )}
        </div>
      </Row>
      {children}
    </main>
  );
};

export default Default;
