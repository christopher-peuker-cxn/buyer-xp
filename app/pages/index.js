import { useState, Fragment } from 'react';
import { useSpring, animated } from 'react-spring';
import Page from '../layouts/page';
import css from './index.scss';

import CollectionSlideWrapper from '../components/collections/collection_slide_wrapper';
import CollectionSlide from '../components/collections/collection_slide';

const FAKE_DATA = {
  video: {
    url: 'https://www.youtube-nocookie.com/embed/CVgnzuJgI94?modestbranding=1&rel=0&autohide=1&showinfo=0&controls=0&autoplay=1&loop=1&enablejsapi=1',
  },
  slides: [
    {
      name: 'Collection #1',
      link: '/test1',
      url: '/static/slide_01.jpg',
      id: 1
    },
    {
      name: 'Collection #2',
      link: '/test2',
      url: '/static/slide_02.jpg',
      id: 2
    },
    {
      name: 'Collection #3',
      link: '/test3',
      url: '/static/slide_03.jpg',
      id: 3
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
        <div className={ css.showCollections } onClick={() => setVideoFadeOut(true)}>TAKE ME TO THE SHOW ---------></div>
        <animated.div className={ css.animationWrapper } style={ wrapperAnimation } >
          <CollectionSlideWrapper>
            { FAKE_DATA.slides.map((collection, i) => <CollectionSlide key={ i } classes='column no-padding-sides' {...collection}/>) }
          </CollectionSlideWrapper>
        </animated.div>
      </Fragment>
    </Page>
  )
}

export default Index;