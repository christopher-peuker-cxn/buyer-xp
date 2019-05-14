import App, { Container } from 'next/app';
// import '../static/global.css';

// workaround for css chunks not loading on navigate
// https://github.com/zeit/next-plugins/issues/282
import '../static/empty.css'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Component {...pageProps}/>
      </Container>
    )
  }
}

export default MyApp;