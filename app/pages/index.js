import { useState, Fragment } from 'react';
import { useSpring, animated } from 'react-spring';
import Page from '../layouts/page';
import css from './index.scss';

import CollectionSlideWrapper from '../components/collections/collection_slide_wrapper';

const FAKE_DATA = {
  video: {
    url: 'https://www.youtube-nocookie.com/embed/CVgnzuJgI94?modestbranding=1&rel=0&autohide=1&showinfo=0&controls=0&autoplay=1&loop=1&enablejsapi=1',
  },
  slides: [
    {
      designer: 'DESIGNER NAME',
      collectionName: 'NUDE',
      season: 'SS\'19',
      link: '/test1',
      url: '/static/slide_01.jpg',
      id: 1,
      themeBlack: false,
    },
    {
      designer: 'DESIGNER NAME',
      collectionName: 'THE REAL PANTS',
      season: 'SS\'19',
      link: '/test2',
      url: '/static/slide_02.jpg',
      id: 2,
      themeBlack: true,
    },
    {
      designer: 'DESIGNER NAME',
      collectionName: 'FABRIK',
      season: 'SS\'19',
      link: '/test3',
      url: '/static/slide_03.jpg',
      id: 3,
      themeBlack: false,
    },
  ]
}

const Index = (props) => {
  const [videoInactive, setVideoInactive] = useState(false);
  const [videoFadeOut, setVideoFadeOut] = useState(false);
  const [videoSrc, setVideoSrc] = useState(FAKE_DATA.video.url);

  const wrapperAnimation = useSpring({
    transform: videoInactive ? 'translateX(0%)' : 'translateX(100%)',
    config: {
      tension: 100
    }
  })

  const fadeOut = useSpring({
    opacity: videoFadeOut ? 1 : 0,
    onRest: () => {
      if (videoFadeOut) {
        setVideoInactive(true);
        setVideoSrc('');
      }
    }
  })

  return (
    <Page title='Homepage'>
      <Fragment>
        <iframe className={ css.videoWrapper } src={ videoSrc } frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        <animated.div style={ fadeOut } className={ css.videoWrapperOverlay } onClick={() => setVideoSrc(videoSrc? '' : FAKE_DATA.video.url) }/>
        <div className={ css.showCollections } onClick={() => setVideoFadeOut(true)}>TAKE ME TO THE SHOW —></div>
        <animated.div className={ css.animationWrapper } style={ wrapperAnimation } >
          <CollectionSlideWrapper slides={ FAKE_DATA.slides }/>
        </animated.div>
      </Fragment>
    </Page>
  )
}

export default Index;