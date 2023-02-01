import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  // Everytime there is an error, call this function
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, infor) {
    // Typically you would track this to TrackJs or NewRelic
    console.error("Error caught", error, infor);
  }

  render() {
    if (this.state.hasError) {
      // takes errorComponent as a prop and renders it here
      return this.props.errorComponent;
    }
    // if no error, seamlessly pass through
    return this.props.children;
  }
}

export default ErrorBoundary;
