import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('returns next level', () =>{
  //Given
  const tested = new App();
  const levels = [ 'level01', 'level02']
  const currentlyFinishedLevel = 0
  //When
  const actual = tested.getNextLevel(levels, currentlyFinishedLevel)
  //Then
  expect(actual).toEqual('level02')
});

it('returns null', () =>{
  //Given
  const tested = new App();
  const levels = [ 'level01', 'level02']
  const currentlyFinishedLevel = 2
  //When
  const actual = tested.getNextLevel(levels, currentlyFinishedLevel)
  //Then
  expect(actual).toEqual(null)
});

