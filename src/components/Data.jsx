import React, { useMemo, useState, useEffect } from 'react';
import Header from './shared/Header';
import axios from 'axios';


const Data = () => {
  const [data, setData] = useState([]);
  const [fil, setFilter] = useState([]);
  const dataSet = useMemo(() => data, [data]);
  const filterData = useMemo(() => fil, [fil]);


  useEffect(() => {
    axios.get('https://420memesxd.github.io/json-for-javascript/data.json')
    .then(resp =>{
      setData(resp.data);
      setFilter(resp.data);
    });
  }, []);


  const filter = event => {
    event.persist();
    const value = event.target.value;
    if (value.length === 0) {
        setFilter([...dataSet]);
    } else if (isNaN(value)) {
      const regex = new RegExp(value);
      setFilter([...dataSet.filter(datum => (regex.test(datum.name) || regex.test(datum.Genre)))]);
    } else {
      const num = Number(value);
      setFilter([...dataSet.filter(datum => (Number(datum.userId) === num || Number(datum.id) === num))]);
    }
      };

  const sort = event => {
    event.persist();
    axios.get('https://420memesxd.github.io/json-for-javascript/data.json')
    .then(resp => {
      setFilter([...dataSet]);
      setFilter([...dataSet.sort((a, b) => a.name.localeCompare(b.name))]);
    });
  };



  return (
    <>
      <div className="container-fluid">
        <Header title="Your Data"/>
      </div>

      <div className="container">
        <h2>Data Table</h2>
        <hr/>

        <div className="row my-3 align-items-center justify-content-end">
          <div className="col-auto">
            <label htmlFor="filter" className="col-form-label">Filter</label>
          </div>

          <div className="col-auto">
            <input type="text" name="filter" className="form-control" onChange={filter}/>
            <p>Careful Capital Letters matter!</p>
            <button onClick={sort}>Sort</button>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Genre</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
          {filterData.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.Genre}</td>
                <td>{user.rating}</td>
              </tr>
        ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Data;
