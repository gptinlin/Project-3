import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

<!DOCTYPE html>

<html>

  <head>

       <meta charset="UTF-8">

       <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>

       <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

       <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>

 

  </head>

  <body>

      <div id="root"></div>

      <script type="text/babel">

          ReactDOM.render(

              <div>Hello World</div>,

              document.getElementById("root")

          )

      </script>

  

  </body>


</html>