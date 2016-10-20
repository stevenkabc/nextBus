import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import * as stations from './stations.js';
// const buses =

console.log(stations.buses);



const BusStops  = (props) => {
  return (
    <div className="Content">
      {props.busStop.name}
      <div>
        {props.busStop.time.map((eta,index) => {
          let route = props.busStop.route[index];
          return (
            <div>
            <div style={{display: 'inline-block'}} >
            {eta}-{route}</div>
            </div>

          )
        },props.busStop)}

      </div>

    </div>);
}


const BusRoutes = (props) => {
  return (
    <div className='Routes' >
    <h1>
      {props.routeNumber} - {props.routeName}
    </h1>
      {props.busStops.map( (busStop) =>
        <BusStops busStop={busStop} />
      )}
    </div>


  )
}


class WheresMyBus extends Component {
  render() {
    return (
      <div>
        {this.props.buses.map(function(route) {
          return (
            <BusRoutes routeNumber={route.routeNumber}
            routeName={route.routeName}
            busStops={route.busStops} />
          )
        }
        )}
      </div>);
  }
}

class App extends Component {
//   componentWillMount() {
//     debugger;
//     let today = new Date();
//     console.log(today.getDay(), today.getHour(),":",today.getMinutes())
//     return;
//   }
  render() {
    return (
      <div className="App">
        <WheresMyBus buses={stations.buses} />

      </div>
    );
  }
}
export default App;
