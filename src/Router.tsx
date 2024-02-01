import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout';
import { CheckoutPage } from './pages/Checkout/Checkout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}
