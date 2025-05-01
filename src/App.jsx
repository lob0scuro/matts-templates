import RootLayout from "./layout/RootLayout";
import HoldTicket from "./routes/HoldTicket";
import PriceTags from "./routes/PriceTags";
import SandBox from "./routes/SandBox";
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
        <Route path="/holds" element={<HoldTicket />} />
        <Route path="/sandbox" element={<SandBox />} />
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
