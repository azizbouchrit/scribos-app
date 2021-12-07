import { useState } from "react";
import "./Home.css";
import Preview from './../components/Preview';

const countries = [
  { name: "Argentina (AR)", code: "AR" },
  { name: "Australia (AU)", code: "AU" },
  { name: "China (CN)", code: "CN" },
  { name: "France (FR)", code: "FR" },
  { name: "Germany (DE)", code: "DE" },
  { name: "India (IN)", code: "IN" },
  { name: "Malta (MT)", code: "MT" },
  { name: "Tunisia (TN)", code: "TN" },
];

const Home = () => {
  const [exchange, setExchange] = useState(false);
  const [designation, setDesignation] = useState("");
  const [reference, setRef] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className='home'>
      <h1>
        Please Fill in your details concerning your requested non-standard
        services carefully
      </h1>
      <div className='container'>
        <div className='form'>
          <div className='form-group'>
            <span>1</span>
            <input
              type='checkbox'
              checked={exchange}
              onChange={(e) => setExchange(e.currentTarget.checked)}
            />
            <span>Exchange Part</span>
          </div>
          <div className='form-group'>
            <span>2</span>
            <input
              type='text'
              className='form-input'
              placeholder='Designation'
              value={designation}
              onChange={(e) => setDesignation(e.currentTarget.value)}
            />
          </div>
          <div className='form-group'>
            <span>3</span>
            <input
              type='number'
              min='0'
              className='form-input'
              placeholder='Ref'
              onChange={(e) => setRef(parseInt(e.currentTarget.value))}
            />
          </div>
          <div className='form-group'>
            <span>4</span>
            <input
              type='number'
              min='0'
              className='form-input'
              placeholder='Quantity'
              onChange={(e) => setQuantity(parseInt(e.currentTarget.value))}
            />
          </div>
          <div className='form-group'>
            <span>5</span>
            <select
              value={country}
              onChange={(e) => setCountry(e.currentTarget.value)}
            >
              <option value='' disabled>
                Select your country
              </option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <span>6</span>
            <input
              type='date'
              className='form-input'
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <Preview
          exchange={exchange}
          designation={designation}
          reference={reference}
          quantity={quantity}
          country={country}
          date={date}
        />
      </div>
    </div>
  );
};

export default Home;
