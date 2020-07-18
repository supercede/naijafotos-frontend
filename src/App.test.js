import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <>
      <h1>This is a generic test</h1>
      <p>For CI purposes</p>
    </>,
    div
  );
});
