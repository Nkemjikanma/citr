import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  // takes this value as default for when no image is passed
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state; // state is mutable and can be changed using `this.setState`
    const { images } = this.props; // is immutable

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
