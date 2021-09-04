import React from 'react';
//notice one line difference between custom import and React,ReactNative imports
import Component from './components/sampleComponent';
//only this one line difference between imports and actual component
export default function App() {
  return <Component screenColor="white" />;
}
//NO ';' in the entire code
//check the compoennts folder and Screens folder.. thats where
// the required components and screens should go
//:Code Neatly
//Leave only few comments no garbage
