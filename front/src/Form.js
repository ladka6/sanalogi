import React, { useState } from "react";

const Form = ({ formData, setFormData }) => {

  const [tarih, setTarih] = useState(Date.now());
  const [firma, setFirma] = useState('');
  const [adi, setAdi] = useState('');
  const [adet, setAdet] = useState('');
  const [tutar, setTutar] = useState('');

  const addData = (tarih, firma, adi, adet, tutar) => {
    const newData = [...formData, {
      tarih: tarih,
      firma: firma,
      adi: adi,
      adet: adet,
      tutar: tutar
    }];
    setFormData(newData);
  }

  return (

    <div className="row g-3 p-3">
      <div className="col-md-6">
        <label className="form-label">Sipariş Tarihi</label>
        <input onChange={(e) => setTarih(e.target.value)} type="date" className="form-control"></input>
      </div>
      <div className="col-md-6">
        <label className="form-label">Sipariş Veren Firma</label>
        <input onChange={(e) => setFirma(e.target.value)} type="text" className="form-control"></input>
      </div>
      <div className="col-4">
        <label className="text">Ürün Adı</label>
        <input onChange={(e) => setAdi(e.target.value)} type="text" className="form-control"></input>
      </div>
      <div className="col-4">
        <label className="text">Ürün Adedi</label>
        <input onChange={(e) => setAdet(e.target.value)} type="number" className="form-control"></input>
      </div>
      <div className="col-4">
        <label className="text">Ürün Tutarı</label>
        <input onChange={(e) => setTutar(e.target.value)} type="number" className="form-control"></input>
      </div>
      <div className="col-12">
        <button onClick={(e) => {
          e.preventDefault();
          addData(tarih, firma, adi, adet, tutar);
        }} type="submit" className="btn btn-primary">Ekle</button>
      </div>
    </div >

  );
}

export default Form;