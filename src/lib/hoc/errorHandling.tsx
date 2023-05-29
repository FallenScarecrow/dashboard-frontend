function withErrorHandling(WrappedComponent: React.FunctionComponent) {
  return function WithErrorHandling(props: object) {
    try {
      // Perform some operation that may throw an error
      return <WrappedComponent {...props} />;
    } catch (error) {
      // Handle the error and display an error message
      return <div>Error</div>;
      // return <ErrorMessage />;
    }
  };
}

export default withErrorHandling;
