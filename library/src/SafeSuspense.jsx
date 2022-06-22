import React, { Component, Suspense } from "react";

class SafeSuspense extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorFallback;
    }

    return (
      <Suspense fallback={this.props.loader}>{this.props.children}</Suspense>
    );
  }
}

export default SafeSuspense;
