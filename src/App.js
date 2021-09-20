import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import Addbtn from "./components/layout/Addbtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/tech/AddTechModal";
import TechListModal from "./components/tech/TechListModal";
import "./App.css";

const App = () => {
  useEffect(() => {
    //This initializes material JS
    M.AutoInit();
  });
  return(
  <Fragment>
    <SearchBar />
    <div className="container">
      <Addbtn />
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
      <TechListModal />
      <Logs />
    </div>
  </Fragment>
  )
};

export default App;
