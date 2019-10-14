import React from 'react';
import ReactDOM from 'react-dom';

const UtilityFuncs = {
  loadComponent(selector, Component, append = false) {
    Array.from(document.querySelectorAll(selector)).forEach(node => {
      let receivedNode = node;
      const dataToProps = Object.keys(receivedNode.dataset).reduce((data, key) => {
        try {
          data[key] = JSON.parse(receivedNode.dataset[key]);
        } catch (e) {
          data[key] = receivedNode.dataset[key];
        }
        return data;
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

export default UtilityFuncs;
