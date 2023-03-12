import React from 'react';
import LastName from './Components/LastName';
import Name from './Components/Name';
import Title from './Components/Title';
import NavBar from './Components/NavBar';
import { AppStyle } from './Styles/App';

function App() {
  return (
    <AppStyle>
      <NavBar/>
      <Title/>
      <Name/>
      <LastName/>
    </AppStyle>
  );
}

export default App;
