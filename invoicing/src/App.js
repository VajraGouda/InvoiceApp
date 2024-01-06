import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import InvoiceList from './components/InvoiceList/InvoiceList';
import InvoiceForm from "./components/InvoiceForm/InvoiceForm";
import InvoiceItems from "./components/InvoiceItems/InvoiceItems";
import ItemForm from "./components/ItemForm/ItemForm";
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='' element={<InvoiceList />}>
        </Route>
        <Route path='newInvoice' element={<InvoiceForm />}>
        </Route>
        <Route path='/:id' element={<InvoiceItems />}>
        </Route>
        <Route path='/:id/newItem' element={<ItemForm />}>
        </Route>
        <Route path='/login' element={<LoginPage />}>
        </Route>
        <Route path='/signup' element={<RegisterPage />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
