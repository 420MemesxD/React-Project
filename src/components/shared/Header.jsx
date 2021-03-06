import React from 'react';

const Header = (props) => {
  return (
    <header className=" p-5 text-center">
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
