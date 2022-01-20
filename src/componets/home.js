import React from "react";
import Card from "./cards";
class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        photos: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=2gevbmobZKwRKYjitFjn11PJwbvkciSoEykDvzpd")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              photos: result.photos
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, photos } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {photos.map(photo => (
              <Card id={photo.id} imageURL={photo.img_src} title={photo.camera.full_name} date= {photo.earth_date}i/>
            ))}
          </ul>
        );
      }
    }
  }

  export default Home;
  