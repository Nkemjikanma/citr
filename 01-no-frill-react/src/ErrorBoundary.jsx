import { Component } from "react";
import { Link } from "react-router-dom";

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
      return (
        <h2>
          There was an error with the listing click <Link to="/">HERE</Link> to
          go back to the HOMEPAGE
        </h2>
      );
    }
    // if no error, seamlessly pass through
    return this.props.children;
  }
}

export default ErrorBoundary;
