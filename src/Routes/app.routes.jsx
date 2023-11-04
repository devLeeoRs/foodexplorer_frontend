import { Routes, Route } from "react-router-dom";

import { Dish } from "../pages/Dish";
import { EditDish } from "../pages/EditDish";
import { Home } from "../pages/Home";
import { CreateDish } from "../pages/CreateDish";
import { Favorite } from "../pages/Favorites";
import { Payment } from "../pages/payment";
import { Requests } from "../pages/Requests";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/create-dish" element={<CreateDish />} />
      <Route path="/favoritos" element={<Favorite />} />
      <Route path="/checkout" element={<Payment />} />
      <Route path="/pedidos" element={<Requests />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
