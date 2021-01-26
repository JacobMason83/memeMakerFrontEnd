import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from 'hookrouter'

//importing styles and main component 
import "./style/main.scss";
import App from "./components/app";
import MemeForm from './components/memeForm'

const routes = {
  "/": ()=> <App />,
  "/form": () => <MemeForm />,
  "/form/:id": ({ id }) => <MemeForm editMode={true} id={id} />
}

function Main() {
  return (
    <div>
      <div className="navBar">
        <A href="/">Home</A>
        <A href="/form">Form</A>
      </div>
      {useRoutes(routes)}
    </div>
  )
}

ReactDOM.render(    
  <Main />, document.querySelector(".app-wrapper")
  );

