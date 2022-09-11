import React from 'react'

const Data = ({ formData }) => {

  const renderData = formData.map((value, index) => {

    return (
      <tr key={index}>
        <th scope="row">{value.tarih}</th>
        <td>{value.firma}</td>
        <td>{value.adi}</td>
        <td>{value.adet}</td>
        <td>{value.tutar}</td>
      </tr>
    )
  })

  return (
    <table className="table table-hover shadow">
      <thead className='table-dark'>
        <tr>
          <th scope="col">Tarih</th>
          <th scope="col">Firma Adı</th>
          <th scope="col">Ürün Adı</th>
          <th scope="col">Ürün Adedi</th>
          <th scope='col'>Ürün Tutarı</th>
        </tr>
      </thead>
      <tbody>
        {renderData}
      </tbody>
    </table>
  );
};

export default Data;