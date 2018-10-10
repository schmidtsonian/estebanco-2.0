import React, {PureComponent} from "react"
import {TransitionGroup, Transition as ReactTransition} from "react-transition-group"

const timeout = 500;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
    transitionProperty: 'opacity',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: `${timeout}ms`,
    opacity: 0,
  },
  entered: {
    transitionProperty: 'opacity',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: `${timeout}ms`,
    opacity: 1,
  },
  exiting: {
    transitionProperty: 'opacity',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: `${timeout}ms`,
    opacity: 0,
  },
  exited: {
    transitionProperty: 'opacity',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: `${timeout}s`,
    opacity: 0,
  },
}

class Transition extends PureComponent {

  render() {
    const {children, location} = this.props;

    return (
      <TransitionGroup className='l-container__handler'>
        <ReactTransition
          key={location.pathname}
          timeout={{enter: timeout, exit: timeout}}
        >
          {(status) => {
            return (<div className='l-container__view' style={{
              ...getTransitionStyles[status],
            }}>
              {children}
            </div>);
          }}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition;
