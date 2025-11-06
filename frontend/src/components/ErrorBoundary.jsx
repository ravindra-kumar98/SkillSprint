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
    return { hasError: true, errorMsg: JSON.stringify(err) };
  }
  componentDidCatch(err, info) {
    this.setState({
      errorMsg: err.toString(),
      errorInfo: info.componentStack,
    });
  }
  render() {
    if (this.state.hasError) {
      return <>
        <h1>Something went wrong: {this.state.errorMsg}</h1>
        <p>{this.state.errorInfo}</p>
      </>;
    }
    return this.props.children;
  }
}
