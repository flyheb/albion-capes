import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/albion-capes">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
