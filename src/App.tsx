import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AboutMe from './Components/AboutMe';
import { AppStyle } from './Styles/App';

function App() {
  return (
    <Router>
      <AppStyle>
      <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={AboutMe} />
        </Routes>
      </AppStyle>
    </Router>
  );
}

export default App;
