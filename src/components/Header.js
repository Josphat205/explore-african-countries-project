import React, { useState } from 'react';
import './Header.css';
import { Navbar } from '@material-tailwind/react';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { FiSearch, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchByName } from '../redux/country/country';

export default function Header() {
  const currentYear = new Date().getFullYear();
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (term !== '') {
      dispatch(fetchByName(term));
      setTerm('');
    }
  };
  return (
    <Navbar className="mx-auto Header">
      <div className="container flex items-center justify-between text-black-900">
        <div className="title">
          <Link to="/">
            <FaLessThan className="icons" />
          </Link>
          <Link to="/">
            <h2>{currentYear}</h2>
          </Link>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Enter species name"
            />
            <button aria-label="Mute volume" type="submit">
              <FiSearch className="icons" />
            </button>
          </form>
        </div>
        <div className="setting">
          <FaMicrophone className="icons" />
          <FiSettings className="icons" />
        </div>
      </div>
    </Navbar>
  );
}
