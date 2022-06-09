import Head from 'next/head';
import { ReactNode } from 'react';

import { NextPageWithLayout } from './_app';

const AboutMe: NextPageWithLayout = () => (
  <div>
    <Head>
      <title>Create Next App - About me</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Nextjs boilerplate - About Me</h1>
  </div>
);

AboutMe.getLayout = (page: ReactNode) => (
  <div>
    <div>
      <h2>My custom layout component</h2>
    </div>
    <main>{page}</main>
  </div>
);

export default AboutMe;