import Page from '../layouts/page';

import css from './rack.scss';

const Rack = ( props ) => {
  return (
    <Page title='Rack'>
      <h1>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
      <h1 className={ css.thisIshowYouStyleMe }>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
      <h1>I AM THE RACK</h1>
    </Page>
  )
}

Rack.getInitialProps = async (res) => {
  return {};
}

Rack.defaultProps = {
}

export default Rack;