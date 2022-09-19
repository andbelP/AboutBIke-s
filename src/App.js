import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import FirstBike from "./components/routes/FirstBike";
import './css/style.css';
import Main from "./components/main";
import ErrorPage from "./components/errorPage/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "FirstBike",
        element: <FirstBike />,
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
