import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import appStore from "./utils/appStore";
import { Provider, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WatchPage } from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const App = () => {
  const dark = useSelector((store) => store.default.dark);
  return (
    <main className={`${dark ? "dark" : ""}`}>
      <div className="dark:bg-[hsl(0,0%,6%)] dark:text-white">
        <RouterProvider router={appRoutes} />
      </div>
    </main>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    errorElement: <h1>error1</h1>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

export default App;
