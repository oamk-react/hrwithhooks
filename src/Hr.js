import React, { useState } from 'react'

export default function Hr() {
  const [age, setAge] = useState(0);
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const ulim = (220 - age) * 0.85;
    const llim = (220 - age) * 0.65;
    setLower(llim);
    setUpper(ulim);
  }
  return (
    <>
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Age</label>
          <input className="form-control" type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Heart rate limits</label>
          <output className="form-control">{lower.toFixed(0)}-{upper.toFixed(0)}</output>
        </div>
        <button className="btn btn-primary">Calculate</button>
      </form>
    </>
  )
}
