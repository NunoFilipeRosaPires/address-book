import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Home, Settings } from "../pages";

export const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
