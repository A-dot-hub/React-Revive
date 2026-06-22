import { createRoot } from 'react-dom/client'
import ReactDOM from 'react'
import React from 'react'
import App from './App.jsx'



function MyApp(){
    return(
        <div>
            <h1>custom app</h1>
        </div>
    )
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Children: "click me to visit google",
// };

const anotherElemnt=(
    <a href='https://google.com' target='_blank'>Visit google</a>
)


const anotherUser='chai or react'

const reactElement = React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank'
    },
    'clcik me to visist goolge',
    anotherUser
)


createRoot(document.getElementById('root')).
render(
reactElement)
