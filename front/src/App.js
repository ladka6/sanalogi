import React, { useState, useEffect } from "react";
import Data from "./Data";
import Form from "./Form";
import axios from 'axios';

function App() {

  const [formData, setFormData] = useState([]);
  var datas = new FormData()
  const dataPush = async () => {
    axios.post('http://localhost:8080/', datas).then(function (res) { console.log(res) })
  }


  const tableLogic = () => {
    if (formData.length > 0) {
      return (
        <div className="my-4">
          <h3>Ürünler</h3>
          <Data formData={formData} />
          <button className="btn btn-primary mt-3" onClick={() => dataPush()}>Kaydet</button>
        </div>
      );
    }
  }

  return (
    <div className="container">
      <h1 className="text-center my-3">Sanalogi</h1>
      <div className="shadow p-3 my-3 bg-body rounded">
        <Form setFormData={setFormData} formData={formData} />
      </div>
      {tableLogic()}
    </div>
  );
}

export default App;
