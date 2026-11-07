import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./app.css";
import UseState from './pages/UseState/UseState';
import UseEffect from './pages/UseEffect/UseEffect';
import UseContext from './pages/UseContext/UseContext';
import UseRef from './pages/UseRef/UseRef';
import UseReducer from './pages/UseReducer/UseReducer';
import UseCallback from './pages/UseCallback/UseCallback';
import UseMemo from './pages/UseMemo/UseMemo';
import Custom from './pages/Custom/Custom';

const App = () => {	
	return(
    <BrowserRouter>
      <nav>
        <Link to="/">UseState</Link>
        <span>|</span>
        <Link to="/use-effect">UseEffect</Link>
        <span>|</span>
        <Link to="/use-context">UseContext</Link>
        <span>|</span>
        <Link to="/use-ref">UseRef</Link>
        <span>|</span>
        <Link to="/use-reducer">UseReducer</Link>
        <span>|</span>
        <Link to="/use-callback">UseCallback</Link>
        <span>|</span>
        <Link to="/use-memo">UseMemo</Link>
        <span>|</span>
        <Link to="/custom">Custom</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UseState />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-context" element={<UseContext />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
    </BrowserRouter>		
	)
}
export default App;