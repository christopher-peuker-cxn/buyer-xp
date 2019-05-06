import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Page from '../layouts/page';
import css from './index.scss';

import CollectionSlideWrapper from '../components/collections/collection_slide_wrapper';
import CollectionSlide from '../components/collections/collection_slide';

const FAKE_DATA = [
  {
    link: '/test1',
    url: '/static/slide_01.jpg'
  },
  {
    link: '/test2',
    url: '/static/slide_02.jpg'
  },
  {
    link: '/test3',
    url: '/static/slide_03.jpg'
  },
]

const Index = (props) => {
  const [videoInactive, setVideoInactive] = useState(false);

  const wrapperAnimation = useSpring({
    transform: videoInactive ? 'translateX(-100%)' : 'translateX(0%)'
  })

  return (
    <Page title='Homepage'>
      <animated.div className={ css.animationWrapper } style={ wrapperAnimation }>
        <div className={ css.homepageWrapper } onClick={() => setVideoInactive(true)}/>
        <CollectionSlideWrapper>
          { FAKE_DATA.map((collection, i) => <CollectionSlide key={ i } url={ collection.url } name={ collection.name } classes='col-4'/>) }
        </CollectionSlideWrapper>
      </animated.div>
    </Page>
  )
}

export default Index;