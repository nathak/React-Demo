//React Element
import React from 'react';
import './App.css'
import {Header} from "./components/score/Header";
import {Player} from "./components/score/Player";
const titleText = 'This is a title';
const titleId = 'main-title';
const title = (
  <h1 id={titleId} title={titleText}>My First React Element</h1>
);
console.log(title);
const strong = (
  <strong>Description</strong>
);
const desc = (
  <p className='main-desc'>This is a {strong}</p>
);
const header = (
  <header>{title}{desc}</header>
);
// const title = React.createElement(
//   'h1',
//   {id: 'main-title', title: 'This is a title'},
//   'My First React Element'
// );
// const strong = React.createElement(
//   'strong',
//   null,
//   'Description '
// );
// const desc = React.createElement(
//   'p',
//   null,
//   'This is a ', strong
// );
// const header = React.createElement(
//   'header',
//   null,
//   title, desc
// );
const players = [
  {name: 'HJW', score: 10},
  {name: 'KJW', score: 20},
  {name: 'AAF', score: 30},
  {name: 'GET', score: 40},
  {name: 'BMD', score: 50}
];
// const Header = (props) => {
//   console.log(props);
//   const {title, totalPlayer} = props;
//   return (
//     <header>
//       <h1>{title}</h1>
//       <span className="stats">Players: {totalPlayer}</span>
//     </header>
//   )
// }

// const Player = (props) => {
//   return (
//     <div className='player'>
//       <span className='player-name'>
//         <button onClick={() => props.removePlayer(props.id)} className='remove-player'>X</button>
//         {props.name}
//       </span>
//       <Counter />
//     </div>
//   )
// };

// class Counter extends React.Component{
//   constructor(props){
//     super(props);
//     //Bind 방식 1
//     this.state = {
//       score : 0
//     }
//   }
//   incrementScore = () =>{
//     //현재값 보장 못함
//     // this.setState({score : this.state.score + 1});
//     //현재값 보장함... 실행시 현재값 참조
//
//     // { 묶으면 노파싱 json 을 리턴함 // ( 으로 묶어야 json 처리값 리턴
//     this.setState(prevState => ({
//       score : this.state.score + 1
//     }));
//   };
//   decrementScore = () =>{
//     //현재값 보장 못함
//     // this.setState({score : this.state.score + 1});
//     //현재값 보장함... 실행시 현재값 참조
//
//     // { 묶으면 노파싱 json 을 리턴함 // ( 으로 묶어야 json 처리값 리턴
//     this.setState(prevState => ({
//       score: this.state.score - 1
//     }));
//   };
//   changeScore = (value) =>{
//     this.setState(prevState => ({
//       score : this.state.score + value
//     }));
//   };
//   render(){
//     return (
//       <div className='counter'>
//         <button className='counter-cation decrement' onClick={() => this.changeScore(-1)}>-</button>
//         <span className='counter-score'>{this.state.score}</span>
//         <button className='counter-cation increment' onClick={() => this.changeScore(1)}>+</button>
//       </div>
//     )
//   }
// }
// const Counter = (props) => {
//   return (
//     <div className='counter'>
//       <button className='counter-cation decrement'>-</button>
//       <span className='counter-score'>{props.score}</span>
//       <button className='counter-cation increment'>+</button>
//     </div>
//   )
// };
class App extends React.Component{
  state = {
    players: [
      {id:'1', name: 'HJW'},
      {id:'2', name: 'KJW'},
      {id:'3', name: 'AAF'},
      {id:'4', name: 'GET'},
      {id:'5', name: 'BMD'}
    ]
  };
  handleRemovePlayer = (id) => {
    //handleRemovePlayer(id){
    console.log(this);
    this.setState(prevState => ({
      players: prevState.players.filter(n => n.id !== id)
    }));
  };
  render(){
    return (
      <div className='scoreboard'>
        <Header title="My socoreboard" totalPlayer={1+10}/>
        {
          this.state.players.map(p =>
            <Player name={p.name} id={p.id} key={p.id} removePlayer={this.handleRemovePlayer}/>
          )
        }
      </div>
    );
  }
}

export default App;