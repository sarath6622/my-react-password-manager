// import { Component } from 'react';
// import './App.css';
// class App extends Component {
//   constructor(){
//     super();

//     // initial object initialisation
//     this.state = {
//       friends:[],
//     };
//   }

//   // is invoked immediately after a component is mounted (inserted into the tree
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//       this.setState(
//         ()=>{
//           //mapping the data from json into the array names friends
//           return {friends:users};
//         },
//         ()=>{
//           console.log(this.state);
//         }

//       )
//       );
//   }

//   render(){
//     return (
//       <div className="App">
//         {
//           this.state.friends.map((friend)=>{
            
//             return (
//               // key is used to uniquely identify the elements in the dom
//               <div key={friend.id}>
//               <h1>{friend.name}</h1>
//               </div>
//             )

//           })
//         }
//       </div>
//     );
//   }
  
// }
// export default App;

