import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props){
    console.log('constructor');

    super(props);

    // initial object initialisation
    this.state = {
      friends:[],
      // a new object top store the search results, initially set an empty
      searchField:''
    };
  }

  // is invoked immediately after a component is mounted (inserted into the tree
  componentDidMount(){
    console.log('componentDidMount');

    // fetching the json objects
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
      this.setState(
        ()=>{
          //mapping the data from json into the array names friends
          return {friends:users};
        },
        ()=>{
          console.log(this.state);
        }
      )
      );
  }

  // function which is called on every button press event in search box
  onSearchChange = (event)=>{
      const searchField = event.target.value.toLocaleLowerCase();

      this.setState(()=>{
        return { searchField };
      });

    };

  render(){
    console.log('render');

    const {friends,searchField} = this.state;
    const {onSearchChange} = this;

    // filtering the name from the array based on value in the search field
    const filteredFriends = friends.filter((friend)=>{
      return friend.name.toLocaleLowerCase().includes(searchField)
    });

    return (
      <div className="App">

        <input className='search-box' placeholder='search' onChange={onSearchChange}/>
        {

          // mapping and delivering only the values in the filteredFriends array
          filteredFriends.map((friend)=>{
            
            return (
              // key is used to uniquely identify the elements in the dom
              <div key={friend.id}>
              <h1>{friend.name}</h1>
              </div>
            )

          })
        }
      </div>
    );
  }
  
}
export default App;

