/*-----low level
App Component
    Header component
        logo
            img
        nav-list
            ul-->li->a
    
    Body
        search btn
        showCase
            cart_items
                items->img
                     ->title
                     ->time
    
    footer
        copyrights
----*/
# testing
    types of testing
        unit testing,Intergration testing,end to end testing
# Setting up testing
    npm install -D @testing-library/react
    npm install -D jest
    npm install --save-dev babel-jest @babel/core @babel/present-env
# Configure Babel
    babale.config.js
       module.exports = {
        presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
        };
    setting up   
#  to Disable babel transpilation in parcel
   .pareclrc-->{
      {
    "extends": "@parcel/config-default",
    "transformers": {
      "*.{js,mjs,jsx,cjs,ts,tsx}": [
        "@parcel/transformer-js",
        "@parcel/transformer-react-refresh-wrap"
      ]
      } 
   }
   }
# jest configuration
  npx jest --init
# jest-environment-jsDom(JsDom Library)
  npm install -D jest-environment-jsdom
# install @babel/preset-react
- to make JSX work in Test Case as we use JSX components
 - configure Babel config for @babel/preset-react
  -  ['@babel/preset-react',{runtime:'automatic'}] like this
# install '@testing-library/jest-dom' 
 -to use tobeFunction();