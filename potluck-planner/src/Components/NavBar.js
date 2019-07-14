import React from 'react';
import './NavBar.css';

function NavBar(props) {
  return (
    <header>
      <h1 className="logo">PotLuck</h1>
      <nav>
        <a>
          <button
            ref={props.containerRef}
            onClick={props.onClick}
            type="button"
          >
            {props.current}
          </button>
        </a>
        <a>
          <button
            ref={props.containerRef}
            onClick={props.onClick}
            type="button"
          >
            {props.currentActive}
          </button>
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
