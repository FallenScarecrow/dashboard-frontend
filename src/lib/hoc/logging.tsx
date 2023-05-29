import React from 'react';

const withLogging = (WrappedComponent: React.FunctionComponent) => {
  return class WithLogging extends React.Component {
    componentDidMount() {
      console.log('Component has mounted:', this.props.name);
    }

    componentWillUnmount() {
      console.log('Component will unmount:', this.props.name);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLogging;
