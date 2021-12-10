import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Hello from './components/Hello'
import Lifecycle from './components/Lifecycle'
// const dom = React.createElement('div', { id: 'app' }, 'HelloWorld')
// root元素存在于public中的index.html中
// ReactDom.render(dom, document.getElementById('root'))
// 创建组件方式一：
// function Hello () {
//   return <div>HelloWorld</div>
// }
// ReactDom.render(<Hello />, document.getElementById('root'))
// 创建组件方式二：
// class Hello extends React.Component{
//   render () {
//     return <div>HelloWorld</div>
//   }
// }
// ReactDom.render(<Hello />, document.getElementById('root'))
ReactDom.render(<Lifecycle />, document.getElementById('root'))