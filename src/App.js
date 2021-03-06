import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import VideoLibrary from './components/VideoLibrary';
import VideoSearch from './components/VideoSearch';
import CustomerList from './components/CustomerList';
import PostToRails from './components/PostToRails';


const App = () => {
const [selectedVideoID, setSelectedVideoID] = useState('');
const [selectedVideoTitle, setSelectedVideoTitle] = useState('');

const [selectedCustomerID, setSelectedCustomerID] = useState('');
const [selectedCustomerName, setSelectedCustomerName] = useState('');

const [message, setMessage] = useState('');



// 1. pass down function all the way to entry
// 2. make button to be able to select them
// 3. pass data back 
const onClickLibraryCallback = (video) => {
  setSelectedVideoID(video.id);
  setSelectedVideoTitle(video.title);
  console.log('onClickLibraryCallback was called')
}

const onClickCustomerListCallback = (customer) => {
  setSelectedCustomerID(customer.id);
  setSelectedCustomerName(customer.name);
  console.log('onClickCustomerListCallback called')
}

const onSuccessfulRental = () => {
  setMessage('');
  setSelectedCustomerID('');
  setSelectedCustomerName('');
  setSelectedVideoID('');
  setSelectedVideoTitle('');
  setMessage(`You successfully checked out!`)
}

const onFailedRental = () =>{
  setMessage('Rental incomplete.  Make sure to select a video and customer.')
}


const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/search'>Video Search</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/library'>Video Library</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/customers'>List Customers</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/search' component={Search}></Route>
    <Route exact path='/library' component={Library}></Route>
    <Route exact path='/customers' component={Customers}></Route>
  </Switch>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to Video Store</h1> 
    <PostToRails video={selectedVideoTitle} customer={selectedCustomerID} onSuccessfulRental={onSuccessfulRental} onFailedRental={onFailedRental}/> 
  </div>
);

const Search = () => (
  <div className='search'>
    <h1>Search for a new video</h1>
    <VideoSearch />
  </div>
);


const Library = () => (
  <div className = 'library'>
    <h1>Peruse our video library</h1>
    <VideoLibrary libraryCallback={onClickLibraryCallback}/>
  </div>
);

const Customers = () => (
  <div className = 'customers'>
    <h1>List of customers</h1>
    <CustomerList listCallback={onClickCustomerListCallback}/>
  </div>
);

return(  <div className='app'>
<h1>Leah and Mackenzie's Video Store</h1>
<h3> {selectedVideoTitle !== '' ? `Selected Video: ${selectedVideoTitle}` : null} </h3>
<h3> {selectedCustomerName !== '' ? `Selected Customer: ${selectedCustomerName}` : null} </h3>
<h3> {message !== '' ? message : null} </h3> 
<Navigation />
<Main />
</div>
)
}

export default App;
