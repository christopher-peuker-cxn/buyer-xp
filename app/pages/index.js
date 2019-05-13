import axios from 'axios';
import API_URL from '../utils/basepath';
import { useState, useRef, useEffect, Fragment } from 'react';
import { useSpring, animated } from 'react-spring';
import Page from '../layouts/page';
import VideoPlayer from '../components/utils/video_player';
import css from './index.scss';

import CollectionSlideWrapper from '../components/collections/collection_slide_wrapper';

const FAKE_DATA = {
  video: {
    desktopSrc: 'https://content.jwplatform.com/videos/7veAA6F4-vkKFSBlV.mp4',
    // desktopSrc: '/static/static_test_video.mp4',
    mobileSrc: 'https://content.jwplatform.com/videos/7veAA6F4-gFpIvlsJ.mp4',
    poster: 'https://content.jwplatform.com/thumbs/7veAA6F4-1280.jpg'
  }
}

const Index = (props) => {
  const [showCollections, setShowCollection] = useState(false);
  const [videoFadeOut, setVideoFadeOut] = useState(false);

  const videoPlayer = useRef(null);

  const wrapperAnimation = useSpring({
    transform: showCollections ? 'translateX(0%)' : 'translateX(100%)',
    config: {
      tension: 100
    }
  })

  const fadeOut = useSpring({
    opacity: videoFadeOut ? 0 : 1,
    onRest: () => {
      if (videoFadeOut) {
        videoPlayer.current.pause();
        setShowCollection(true);
      }
    }
  })

  return (
    <Page title='Homepage'>
      <Fragment>
        <animated.div style={ fadeOut } className={ css.videoWrapperOverlay }>
          <VideoPlayer reference={ videoPlayer } mp4Src={ FAKE_DATA.video.desktopSrc } mp4SrcSmall={ FAKE_DATA.video.mobileSrc } poster={ FAKE_DATA.video.poster } classes={ css.videoWrapper } onEnded={ () => setShowCollection(true) } autoPlay='autoplay'/>
        </animated.div>
        <div className={ css.showCollections } onClick={() => setVideoFadeOut(true)}>TAKE ME TO THE SHOW —></div>
        <animated.div className={ css.animationWrapper } style={ wrapperAnimation } >
          <CollectionSlideWrapper slides={ props.collections }/>
        </animated.div>
      </Fragment>
    </Page>
  )
}

Index.getInitialProps = async (req) => {
  const response = await axios(`${API_URL}/home`);
  return { ...response.data }
}

export default Index;