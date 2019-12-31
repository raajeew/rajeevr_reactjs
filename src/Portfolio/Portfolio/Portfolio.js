import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  // componentWillMount(){}
   componentDidMount(){
    const axios = require('axios');
    // Make a request for a user with a given ID
    axios.get('http://rajeevr.com/myAppService/getMyProjectList.php')
      .then( (response) =>{
        // handle success
        this.setState({
          isLoaded: true,
          items: response.data.items
        });
        console.log(this.state);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
   }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.Index}>
              {item.name} ({item.url})
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Portfolio;