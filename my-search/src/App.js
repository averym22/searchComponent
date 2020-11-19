import './App.css';
import React from 'react';
import axios from 'axios';
import Search from './Search';
import Header from './Header';
import Units from './Units';


class App extends React.Component {
  state = {
    units: []
  }

onSearchSubmit = async (term) => {

  const response = await axios.get(`http://localhost:3010/units/${term}` , {
    params: {name: term}
  })
   this.setState({units : response.data[0]})

   console.log(response.data[0])
  
  
}
  
render() {
  return (
    <div  className="ui container" style={{marginTop : '10px' }}>
      <Header />
      <Search onSubmit={this.onSearchSubmit}/>
      <Units unit={this.state.units} />
     
    </div>
    );
  }
}

export default App;
