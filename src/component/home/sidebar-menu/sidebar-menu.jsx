import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {searchCreator, getSearchKeyCreator} from '../../../redux/action/product';

import "./sidebar.css";
import searchLogo from "../../../assets/image/glass.png";
import filterLogo from "../../../assets/image/filter.png";

const SidebarMenu = (props) => {
  const [isLogin] = useState(false);
  const { animate } = useSelector((state) => state);
  const [filter, setFilter] = useState('ASC')
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if(e.target.value === ''){
      return;
    }
    dispatch(searchCreator(e.target.value, filter))
    dispatch(getSearchKeyCreator(e.target.value, filter))
    props.history.push({
      pathname: '/search',
      data: e.target.value,
    })
  };


  return (
    <div
      className={!animate.menuDisplayed ? "sidebar" : "sidebar-on shadow-sm"}
    >
      <div className='form-sidebar'>
        <form action=''>
          <div className='input-sidebar'>
            <input
              type='text'
              className='search-sidebar'
              placeholder='Search'
              onKeyPress={(event) => {
                if(event.key === 'Enter')
                handleSearch(event)
              }}
            />
            <img src={searchLogo} alt='' />
          </div>
        </form>
        <div className='filter'>
          <img src={filterLogo} alt='' />
        </div>
      </div>
      {isLogin ? null : (
        <div className='sidebar-btn-auth'>
          <button type='button' className='btn btn-sidebar-login btn-lg btn-block'>
            Login
          </button>
          <button type='button' className='btn btn-sidebar-signup btn-lg btn-block'>
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};
export default SidebarMenu;
