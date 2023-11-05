import { Routes, Route } from "react-router-dom";

import { Dish } from "../pages/Dish";
import { Home } from "../pages/Home";
import { Favorite } from "../pages/Favorites";
import { Payment } from "../pages/payment";
import { Requests } from "../pages/Requests";
import { Profile } from "../pages/Profile";
import { NotFound } from "../pages/NotFound";

export function CustomerRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/favoritos" element={<Favorite />} />
      <Route path="/checkout" element={<Payment />} />
      <Route path="/pedidos" element={<Requests />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
