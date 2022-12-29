import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateReceipe from './components/CreateReceipe';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import ShowReceipeDetail from './components/ShowReceipeDetail';
import ShowReceipeList from './components/ShowReceipeList';
import UpdateReceipe from './components/UpdateReceipe';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './components/Footer/Footer';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'nunito',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <NavBar />
          <Home>
            <Routes>
              <Route exact path="/" element={<ShowReceipeList />} />
              <Route path="/create-receipe" element={<CreateReceipe />} />
              <Route path="/edit-receipe/:id" element={<UpdateReceipe />} />
              <Route path="/show-receipe/:id" element={<ShowReceipeDetail />} />
            </Routes>
          </Home>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
