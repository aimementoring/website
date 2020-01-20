import React from 'react';
import ReactDOM from 'react-dom';

export default {
  loadComponent(selector, Component, append = false) {
    Array.from(document.querySelectorAll(selector)).forEach((node) => {
      let receivedNode = node;
      const dataToProps = Object.keys(receivedNode.dataset).reduce((data, key) => {
        const accum = { ...data };
        try {
          accum[key] = JSON.parse(receivedNode.dataset[key]);
        } catch (e) {
          accum[key] = receivedNode.dataset[key];
        }
        return accum;
      }, {});

      dataToProps.children = Array.from(receivedNode.children);

      if (append) {
        const div = document.createElement('div');
        receivedNode = receivedNode.appendChild(div);
      }

      ReactDOM.render(<Component {...dataToProps} />, receivedNode);
    });
  },
};
