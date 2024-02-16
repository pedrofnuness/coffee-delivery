import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import { CheckoutPage } from './pages/Checkout/Checkout';
import { SuccessScreen } from './pages/Success/Success';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessScreen />} />
      </Route>
    </Routes>
  );
}
