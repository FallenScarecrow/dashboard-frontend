import React from 'react';

function withPerformanceMonitoring(WrappedComponent: React.FunctionComponent) {
  return class WithPerformanceMonitoring extends React.Component {
    componentDidMount() {
      const startTime = performance.now();

      // Perform any asynchronous operations or expensive computations
      // that need to be monitored for performance

      const endTime = performance.now();
      const elapsedTime = endTime - startTime;

      console.log(this.props);

      console.log(`Component ${this.props.name} took ${elapsedTime}ms to mount.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withPerformanceMonitoring;
