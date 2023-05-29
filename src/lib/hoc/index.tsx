import withErrorHandling from './errorHandling';
import withLogging from './logging';
import withPerformanceMonitoring from './performanceMonitoring';

const withHOCDefault = MyComponent => {
  return withErrorHandling(withLogging(withPerformanceMonitoring(MyComponent)));
};

export default withHOCDefault;
export { withErrorHandling, withLogging, withPerformanceMonitoring };
