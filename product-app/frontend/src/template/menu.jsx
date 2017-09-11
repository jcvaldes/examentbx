import React from 'react'

export default props => (
  <nav className='navbar navbar-inverse bg-inverse'>
    <div className='container'>
      <div className='navbar-header'>
        <a className='navbar-brand' href='#'>
          <i className='fa fa-calendar-check-o'></i> ProductApp
        </a>
      </div>
      
      <div id='navbar' className='navbar-collapse collapse'>
        <ul className="nav navbar-nav">
          <li><a href='#/todos'>Stock</a></li>
          <li><a href='#/about'>Acerca</a></li>
        </ul>
      </div>
    </div>
  </nav>
)