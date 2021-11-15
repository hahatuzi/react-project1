import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const dom = React.createElement('div', { id: 'app' }, 'HelloWorld')
// root元素存在于public中的index.html中
ReactDom.render(dom, document.getElementById('root'))