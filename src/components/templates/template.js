import {Component} from 'react';
import PropTypes from 'prop-types';

class Template extends Component {

  static propTypes = {
    preloadImages: PropTypes.func,
    pageWillClose: PropTypes.func,
    pageDidPreloadAssets: PropTypes.func,
    data: PropTypes.object
  };

  static defaultProps = {
    preloadImages: () => {},
    pageWillClose: () => {},
    pageDidPreloadAssets: () => {},
    data: {}
  };

  componentDidUpdate(prevProps) {

    const {props} = this;

    if (props !== prevProps) {
      props.preloadImages();
    }
  }
}

export default Template;
