import App, { Container } from 'next/app';
import "../components/global_styles/global.scss";

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