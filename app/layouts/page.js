import React, { Fragment } from 'react';
import Head from 'next/head';
import Nav from './nav';

import css from './page.scss';

const Page = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <title>{`CXN Fashion - ${ title }`}</title>
        <meta
          nasme='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
        <link rel='stylesheet' type='text/css' href='/static/global.css'/>
      </Head>
      <header>
        <Nav />
      </header>
      <main className={ css.mainWrapper }>
        { children }
      </main>
    </Fragment>
  )
}

export default Page;