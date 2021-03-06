import React from 'react';
import Header from './shared/Header';

const About = () => {
  return (
    <>
    <Header title="About"/>
    <p className="text-center">On this lovely website you will be able to look through a list of awesome video games and see my ratings for them. You can also filter through them in a search bar by just typing the name of what you are looking for.</p>
    <p className="text-center">You can also press a button called sort and it will sort the information in alphabetical order.</p>
    </>
  );
}

export default About;
