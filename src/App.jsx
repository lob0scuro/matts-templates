import RootLayout from "./layout/RootLayout";
import PriceTags from "./routes/PriceTags";
import Subscriptions from "./routes/Subscriptions";
import TimeSheet from "./routes/TimeSheet";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Subscriptions />} />
        <Route path="/price-tags" element={<PriceTags />} />
        <Route path="/timesheet" element={<TimeSheet />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
