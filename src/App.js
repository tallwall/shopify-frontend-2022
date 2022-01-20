
import './App.css';
// import axios from 'axios';
// import Loader from '../loader.gif';
// import { Link } from 'react-router-dom';
import Home from './componets/home';

function App() {

//   fetchSearchResults = () => {
    

//     const searchUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2gevbmobZKwRKYjitFjn11PJwbvkciSoEykDvzpd`;
//     if (this.cancel) {
//         // Cancel the previous request
//         this.cancel.cancel();
//     }
//     // Createnew CancelToken
//     this.cancel = axios.CancelToken.source();
//     axios
//         .get(searchUrl, {
//             cancelToken: this.cancel.token,
//         })
//         .then((res) => {
//            // console.log(res)
//             const resultNotFoundMsg = ! res.data.length
//                 ? 'no more search results. Please try a new search.'
//                 : '';
//             this.setState({
//                 results: res.data,
//                 message: resultNotFoundMsg,
//                 loading: false,
//             });
//         })
//         .catch((error) => {
//             if (axios.isCancel(error) || error) {
                
//                 this.setState({
//                     loading: false,
//                     message: 'Failed to fetch results...',
//                 });
//             }
//         });
// }

// handleOnInputChannge = (event) => {
// const query = event.target.value;
// if ( !query ) {
// this.setState({ query, results: {}, message: '' } );
//     console.log(query);
//     console.log("seun");
// } else {
// this.setState({ query, loading: true, message: '' }, () => {
//   this.fetchSearchResults(query);
// });
// }

// }; 


  return (
    <div className="App">
      <header className="App-header">
        <p>Spacestagram: Image-sharing from the final frontier</p>
      </header>
      <body>
        <h2>Getting you the best pics from above and beyond...</h2>
        <Home>
        </Home>
      </body>
    </div>
  );
}

export default App;
