import {Component} from 'react';

class Template extends Component {

  componentDidUpdate(prevProps) {

    if (this.props.data !== prevProps.data) {

      //validate render
      //trigger load assets
      this.props.onMountPage({onMountPage: this});
    }
  }

  componentWillUnmount() {
    this.props.onUnmountPage({onUnmountPage: this});
  }
}

export default Template;
