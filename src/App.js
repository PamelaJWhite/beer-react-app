import React from 'react'

import Beers from './components/Beers'

import './App.css';

let PUNK_API = 'https://api.punkapi.com/v2/beers'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //array that is going to hold the beers
      beers: [],
      likedArray: []
    }
  }

  //componentDidMount is a lifecycle method
  //async/ await
  //make this an asynchronous function with async, 
  //so we don't need to use the  .then syntax
  async componentDidMount() {
    let response = await fetch(PUNK_API);
    console.log("response after fetch:", response)
    let beers = await response.json()
    console.log("beers after await", beers)
    this.setState({
      beers
    })
  }

  //for us to see an accurate update of our data
  //cdu tab
  componentDidUpdate(prevProps, prevState) {
    console.log('This is from state; this.state.beers: ', this.state.beers)
  }

  likeBeer = (index) => {
    console.log("The index passed to likeBeer()", index)
    if(!this.state.likedArray.includes(index)){
      this.state.likedArray.push(index)
      console.log(`added ${index} to likedArray: ${this.state.likedArray}`)
      this.setState({class: 'liked'});
      //I want to change the class of the button here, so I can change the styling
      //but I dont know how to access the button
    }
    else{
      console.log(`this array ${this.state.likedArray} already includes ${index}`)
    }

  }

  render() {
    return (
      <div className="App">
     
        <h1>PUNK API</h1>
        <Beers clickToLike={this.likeBeer} beers={this.state.beers}/>
    
    </div>
    );
  }

  //promises
  //there was an error in this
  //res was undefined
  // componentDidMount() {
  //   fetch(PUNK_API)
  //   .then((res)= res.json())
  //  // this.setState updates state, which is currently an empty array
  //   .then((data) => this.setState{
  //    //points at beers (which was an empty array) and says beer is now data
  //    //set data to the label beers
  //     beers: data
  //   })
  // }
}

export default App;
