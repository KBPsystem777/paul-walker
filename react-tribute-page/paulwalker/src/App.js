import React, { Component } from 'react';
import Img from 'react-image';
import 'w3-css/w3.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';



class Header extends React.Component {
  render() {
    return(
      <div className = 'w3-center'>
        <header>
          <h1>William Paul Walker IV</h1>
        </header>
        <div><em>The Fast and The Furious</em></div>
      </div>
    );
  }
}

const ProfilePicture = () => <Img src="https://cdn.movieweb.com/img.news.tops/NEax4ekygaGkcj_1_b/Fast-Furious-7-Script-Rewrite-May-Retire-Paul.jpg" />



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='w3-center'>
          <ProfilePicture />
        </div>
      </div>
    );
  }
}

export default App;
