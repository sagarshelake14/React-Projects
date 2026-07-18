function customRender(reactElement, container) {    // creating an element using javascript
         /*const domElement = document.createElement(reactElement.type)  // creating a element
         domElement.innerHTML = reactElement.children
         domElement.setAttribute('href', reactElement.props.href)
         domElement.setAttribute('target', reactElement.props.target);
         container.appendChild(domElement)*/

         const domElement = document.createElement(reactElement.type);
         domElement.innerHTML = reactElement.children
         for (const prop in reactElement.props) {
                  if(prop === 'children') continue; 
                  domElement.setAttribute(prop, reactElement.props[prop])
         }
         container.appendChild(domElement)
}        
const reactElement = {    // creating a tag using react
         type: 'a',
         props: {
                 href: 'https://google.com',   // Properties
                 target: '_blank'
         },
         children: "Click me to visit google"  // text in a tag
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
