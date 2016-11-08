import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {routes} from './stations';
// const buses =

const getMins = (a) => {
        let ampm, index, minutes, hours, time;
        ampm = a.includes("AM") ? "AM" : "PM";
        index = a.indexOf(":");
        minutes = parseInt(a.slice(index+1, index +3));
        hours = parseInt(a.slice(0,index));

        if(ampm === "AM" && hours === 12) hours = 24;
        if(ampm === "PM" && hours < 12) hours = hours + 12;
        time = hours * 100 + minutes;
        // console.log(time);
        // console.log(a );
        return time;
}


const BusStops = (props) => {
    var day="";
    let d=new Date();;
    let today = d.getDay();
    // let timeNow = `${d.getHours() -12}:${d.getMinutes()} PM`
    // timeNow = "8:30 PM"
    // timeNow = Date(timeNow);
    // timeNow = Date.parse(timeNow);
    // var busStopArray = [];



    if (!(today % 5)) {
      day = 'Saturday';
    }
    else if ( !(today % 6)) {
      day = 'Sunday';
    }
    else {
      day = 'Daily';
    }
    // busStopArray = props.busStop[day];
  return (
    <div className="Content">
      {props.busStop.name}
      <div>
        { props.busStop[day]['time'].map((eta,index) => {
          let route = props.busStop[day]['route'][index];
          let etaDate = new Date(eta);
          let timeNow = `${d.getHours() }:${d.getMinutes()} PM`
          //             timeNow ="7:40 PM"

          //var nowMins = d.getHours() * 60 + d.getMinutes();
          var nowMins = getMins(timeNow);
          //             var nowMins = 18 * 60 + 30;
          // var i = eta.indexOf(':');
          // var hours = eta.slice(0,i);
          //
          // if (eta.includes('PM') && (hours < 12) ) {
          //   hours = 12 * 60 + hours * 60
          // }
          // else {
          //   hours = hours * 60;
          //   }
          //   var etaMins = hours + (eta.slice(i+1,i+3) * 1);
          var etaMins = getMins(eta);
          var uName = props.busStop.name.toUpperCase()

          if( nowMins < etaMins  && (uName.includes(props.queryStr) ) ) {
                return(
                  <div>
                  <div style={{display: 'inline-block'}} >
                    {eta}-{route}</div>
                  </div>
                )
              }
              else {
                return (
               <div ></div>
             )
           }
        })}

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
        <BusStops busStop={busStop} queryStr={props.queryStr}/>
      )}
    </div>


  )
}



class WheresMyBus extends Component {
  render() {
    return (
      <div>
        {this.props.routes.map(function(route) {
          return (
            <BusRoutes routeNumber={route.routeNumber}
            routeName={route.routeName}
            busStops={route.BusStops}
            queryStr={ ''.toUpperCase()} />
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
        <WheresMyBus routes={routes} />

      </div>
    );
  }
}
export default App;
