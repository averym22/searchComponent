import './App.css';
import React from 'react';
import axios from 'axios';
import Search from './Search';
import Header from './Header';
import Units from './Units';
import Unitinput from './UnitInput'


class App extends React.Component {
  state = {
    units: '',
    unitError: ''
  }

onSearchSubmit = async (term) => {

  const response = await axios.get(`http://localhost:3010/units/${term}` , {
    params: {name: term}
  })
     console.log(response.data[0])
    if (response.data[0] === undefined) {
      
      this.setState({unitsError : 'error'})
    } else {
      this.setState({unitsError : ''})
      this.setState({units : response.data[0]})
    }  
}

onUnitSubmit = () => {
  axios.post('http://localhost:3010/units/', {
            name: this.state.name,
            location : this.state.location,
            size : this.state.size
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))


}
  
render() {
  return (
    <div  className="ui container" style={{marginTop : '10px' }}>
      <Header />
      <Search onSubmit={this.onSearchSubmit}/>
      {this.state.units === '' || this.state.unitsError === 'error' ? null : <Units unit={this.state.units} />}
      {this.state.unitsError === 'error' ? <Unitinput /> : null}
     
    </div>
    );
  }
}

export default App;
