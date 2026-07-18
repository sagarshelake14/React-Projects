import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom react app ! sagar shelake</h1>
        </div>
    )
}

// const ReactElement = {    // creating a tag using react
//          type: 'a',
//          props: {
//                  href: 'https://google.com',   // Properties
//                  target: '_blank'
//          },
//          children: "Click me to visit google"  // text in a tag
// }

const anotherUser = "Code with react"

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit Google</a>
)

const ReactElement = React.createElement(   // injected by babel bundler
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
   'Click me to visit google',
   anotherUser
)

createRoot(document.getElementById('root')).render(
    //<ReactElement />  // jsx syntax
    //MyApp()
   // anotherElement
    ReactElement
   // <App />
)