import React, { Component } from 'react';
import './App.css';

class Header extends React.Component {
  render() {
    return (
      <div className="text-center" id="app-header">
        <div>
          <h1>Paul William Walker IV</h1>
          <em>The Fast and Furious</em>
        </div>
        <div>
          <img src="https://github.com/KBPsystem777/paul-walker/blob/master/tribute/public/img/paul-walker.jpg?raw=trueg"
          alt="Paul Walker" id="profile-pic" className="img-responsive"></img>
        </div>
      </div>
    );
  }
}

class BasicInfo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Early Life</h3>
          <p>Walker was born in Glendale, California, and was the son of Cheryl (née Crabtree),
          a fashion model, and Paul William Walker III, a sewer contractor and
          boxer who was a two-time Golden Gloves champion.
          Paul's paternal grandfather had a boxing career as "'Irish' Billy Walker".
          Paul's ancestry was mostly English, with some German, Swiss, and Irish.
        One of his grandfathers raced factory cars for Ford in the 1960s.</p>
        </div>
        <br />
        <div>
          <h3>Acting Carer</h3>
            <h4>January 1986</h4>
              <p>Paul had a big year in 1986 because this was when his acting career got kickstarted. He started off with playing roles in television shows such as: Who's the Boss, Highway to Heaven, and Charles in Charge. These were all small time deals compared to when he landed his first role in a film called, Monster in the Closet. From here he left his television acting career behind and began taking bigger roles in films. Paul starred in the movies: She's all that, Varsity Blues, and The Skulls.
                  All of these movies were aimed at a younger generation, which would eventually help Paul become popular among teenagers. He started his career working with low-cost television shows and eventually worked his way up to finally acting in movies.
              </p>
            <h4>April 2001 - November 2013</h4>
              <em>Fast and Furious</em>
              <p>Paul's career took off and set him up for good when he was first offered to act in the movie, Fast and Furious. He was one of the starred actors, along with his future friend, Vin Diesel. This movie payed its respects to the road films of the 70's and viewers instantly fell in love. Nobody expected this movie to take off like it did, and the idea of a sequal was originally unthought of. Paul was able to help the movie bring in more than $200 million.</p>
            <h4>August 2010 - Project Reach Out Worldwide</h4>
              <p>Paul started his own organization called, <a href="https://www.roww.org/">Reach Out Worldwide</a>, that is run by professional volunteers who help people that have been affected by natural disasters. These volunteers could be anyone from doctors, nurses, paramedics, and heavy machinery specialists (WBFF FOX45 Baltimore). Throughout the whole time of making this organization, Paul never once dropped his name as the founder. He was a very humble man, 
                especially for someone who was involved in making Hollywood movies.</p>
          <h4>November 30, 2013</h4>
            <p>On November 30, 2013, at about 3:30 p.m. PST, Walker and Roger Rodas, 38, left an event for Walker's charity Reach Out Worldwide for victims of Typhoon Haiyan (Yolanda), with Rodas driving his Porsche Carrera GT. In a 45 miles per hour (72 km/h) speed zone on Hercules Street near Kelly Johnson Parkway in Valencia, Santa Clarita, California, the car crashed into a concrete lamp post and two trees and caught fire. 
              Rodas died of multiple trauma while Walker died from the combined effects of trauma and burns.</p>
        </div>
      </div>
    );
  }
}


class Closer extends React.Component {
  render() {
    return(
      <div className="text-center">
        <em>***For more of Paul Walker's story, you may visit his <a href="https://en.wikipedia.org/wiki/Paul_Walker">Wikipedia page</a></em>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return(
      <div className="text-center">
        <bold>Coded by: <a href="https://koleenbp.now.sh">Koleen BP</a></bold>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header /><br />
        <BasicInfo />
        <Closer />
        <Footer />
      </div>
    );
  }
}

export default App;
