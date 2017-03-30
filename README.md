<h1>Material-UI ReactJs App</h1>
<h2>Material-UI Components</h2>
<ul>
<li>AppBar</li>
<li>DropDownMenu</li>
<li>MenuItem</li>
<li>Paper</li>
<li>TextField</li>
<li>RaisedButton</li>
<li>Divider</li>
<li>Drawer</li>
</ul>
<h2>App Intro</h2>
<p>This small project is developed to show how can we use Material-UI Components with ReactJs. The App demonstrate simple logic of Sign In form. Username and password is nor hardcoded. It has simple flow, when you enter any username and password it will route the user id to the top bar where you can sign out also.</p>

<h2>Setting up the enviroment</h2>
<p>You need to do few tweeks before diving into development</p>
<h3>Step1</h3>
<p>Use "create-react-app" to create project </p>
<h3>Step2</h3>
<p>Install Material-UI through any package you like. I've used npm(node package manager)</p>
<p>npm install -save material-ui</p>
<h3>Step3</h3>
<p>This step is important! you need to install 'react-tap-event-plugin', and use the 'injectTapEventPlugin()' method in your index.js file  otherwise you will mess up with onTouchTap() functionality. According to Material-UI official website (http://www.material-ui.com/#/get-started/installation)the react-tap-event-plugin provides onTouchTap() to all React Components. It's a mobile-friendly onClick() alternative for components in Material-UI, especially useful for the buttons</p>

<h2>Now you are good to go with your developpment</h2>
