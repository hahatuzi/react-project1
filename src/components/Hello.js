import React from 'react'
// import ReactDom from 'react-dom'
// class Hello extends React.Component {
//   handleClick () {
//     console.log('click')
//   }
//   render () {
//     // 事件绑定
//     return <button onClick={this.handleClick} >click</button >
//   }

// }
// ==================================
// function Hello () {
//   function handleClick () {
//     console.log('click')
//   }
//   return <button onClick={handleClick} >click</button >
// }
// ===================================
class Hello extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }
  constructor(props) {
    super(props);
    this.changeCount = this.changeCount.bind(this)
    this.changeValue = this.changeValue.bind(this)
  }
  // 或者可以简写为
  state = {
    date: new Date().toLocaleDateString(),
    count: 10,
    value: 'lisa'
  }
  changeCount () {
    console.log(this, this.state.count)
    this.setState(() => { return { count: this.state.count + 1 } })
  }
  changeValue (e) {
    // console.log(e)
    this.setState({
      value: e.target.value
    })
  }
  render () {
    return (<div><div>{this.state.date}</div><input value={this.state.value} onChange={this.changeValue} />点击增加{this.state.count}</div >)
    // return (<div><div>{this.state.date}</div><button onClick={this.changeCount}>点击增加{this.state.count}</button></div >)
    // return (<div><div>{this.state.date}</div><button onClick={() => { this.changeCount() }}>点击增加{this.state.count}</button></div >)
  }
}
export default Hello