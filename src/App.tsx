import Home from './Components/Home';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AboutMe from './Components/AboutMe';
import { AppStyle } from './Styles/App';

function App() {
  return (
    <Router>
      <AppStyle>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={AboutMe} />
        </Routes>
      </AppStyle>
    </Router>
  );
}

export default App;
