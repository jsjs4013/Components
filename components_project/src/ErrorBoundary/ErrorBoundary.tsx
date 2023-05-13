import React, { Component } from 'react';

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<React.PropsWithChildren<object>, State> {
  state = { hasError: false, error: null };

  // 오류를 발생시킨 후 UI 업데이트
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  // 오류 기록 & 리포팅
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
