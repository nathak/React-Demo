import React from "react";

// eslint-disable-next-line no-unused-vars
export class Counter extends React.Component{
  constructor(props){
    super(props);
    //Bind 방식 1
    this.state = {
      score : 0
    }
  }
  incrementScore = () =>{
    //현재값 보장 못함
    // this.setState({score : this.state.score + 1});
    //현재값 보장함... 실행시 현재값 참조

    // { 묶으면 노파싱 json 을 리턴함 // ( 으로 묶어야 json 처리값 리턴
    this.setState(prevState => ({
      score : this.state.score + 1
    }));
  };
  decrementScore = () =>{
    //현재값 보장 못함
    // this.setState({score : this.state.score + 1});
    //현재값 보장함... 실행시 현재값 참조

    // { 묶으면 노파싱 json 을 리턴함 // ( 으로 묶어야 json 처리값 리턴
    this.setState(prevState => ({
      score: this.state.score - 1
    }));
  };
  changeScore = (value) =>{
    this.setState(prevState => ({
      score : this.state.score + value
    }));
  };
  render(){
    return (
      <div className='counter'>
        <button className='counter-cation decrement' onClick={() => this.changeScore(-1)}>-</button>
        <span className='counter-score'>{this.state.score}</span>
        <button className='counter-cation increment' onClick={() => this.changeScore(1)}>+</button>
      </div>
    )
  }
}