import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import  {
  useDispatch,
  useSelector,
} from 'react-redux';
import './Header.style.css';
import actionTypes from '../../actions/actionTypes';

const Header = () => {
  const dispatch = useDispatch();
  const {
    cart,
    user,
  } = useSelector(state => state);
  const location = useLocation();
  const [input, setInput] = useState('');

  const onChangeHandler = (onChange) => (e) => {
    onChange(e.target.value);
  }

  useEffect(() => {
    let timerId = null;

    timerId = setTimeout(() => {
      dispatch({
        type: actionTypes.FILTER_PRODUCTS,
        payload: input,
      })
    }, 800);

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    }
  }, [input]);

  const showFilter = location.pathname === '/' && user;
  const isLogged = !!user;
  const homeRoute = !isLogged ? location.pathname : '/';

  return (
    <div className="Header">
      <div className='Container'>
        <h1 className="Header-title">
          <Link to={homeRoute}>
            Store
          </Link>
        </h1>
        <div className="Header-checkout">
          {!isLogged && (
            <Link to="/Register">
              Sign up
            </Link>
          )}
          <Link to="/Login">
            {isLogged ? "Sign out" : "Sign in"}
          </Link>
          {isLogged && (
            <div className='Container'>
              <Link to="/checkout">
                <i className="fas fa-shopping-basket" />
              </Link>
              {cart.length > 0 &&
                <div className="Header-alert">{cart.length}</div>
              }
            </div>
          )}
        </div>
      </div>
      {showFilter && (
        <div className='Filter-section'>
          <span>Filter</span>
          <input type="text" placeholder="Search..." className='Input' onChange={onChangeHandler(setInput)} value={input} />
        </div>
      )
      }
    </div>
  )
};

export default Header;
