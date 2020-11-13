import './Background.css';
import { animated, Transition } from 'react-spring';

function Background({ isPlayerExtend, isMobile, currentTrack }) {

  return (
    <div>
    <Transition
      items={currentTrack}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      config={{ mass: 1, tension: 280, friction: 120 }}
      keys={() => currentTrack}
    > 
      {(values, item) => (
        <animated.div
          className="background"
          style={{ backgroundImage: `${item.theme.backgroundImage}`, ...values}}
        ></animated.div>
      )}
    </Transition>
    </div>
  )
}

export default Background;