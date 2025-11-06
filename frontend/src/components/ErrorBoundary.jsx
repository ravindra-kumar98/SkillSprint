import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMsg: "",
      errorInfo: null,
    };
  }
  static getDerivedStateFromError(err) {
    return { hasError: true, errorMsg: err };
  }
  componentDidCatch(err, info) {
    this.setState({
      errorMsg: JSON.stringify(err),
      errorInfo: info.componentStack,
    });
  }
  render() {
    if (this.state.hasError) {
      return <>{this.state.errorMsg}</>;
    }
    return this.props.children;
  }
}
