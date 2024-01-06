import { useRoutes } from "react-router-dom";

import Home from './components/home'
import AjoutArticle from './components/ajoutArticle';
import DetailArticle from './components/detailArticle';
import ListeArticle from './components/listeArticle';
import UpdateArticle from './components/updateArticle';
import  AjoutCategorie from './components/ajoutCategorie';
import ListCategorie from './components/listCategorie';
import UpdateCategorie from './components/updateCategorie';
import Login from './components/login';
import AjoutUser from './components/AjoutUser';
import UpdateUser from "./components/updateUser";
import ListUser from "./components/listUser";
import BarChart from "./components/BarChart";
import Dashboard from "./components/dashboard";
export default function Routes() {

  const router = useRoutes([
    {

      path: "/",
      element: <Home />
    },
    {
      path: "/ajoutArticle",
      element: <AjoutArticle/>
    },
    {
      path: "/ajoutCategorie",
      element: <AjoutCategorie/>
    },
    {
      path: "/ajoutUser",
      element: <AjoutUser/>
    },
    {
      path: "/detailArticle/:id",
      element: <DetailArticle/>
    },
    {
      path: "/listeArticle",
      element: <ListeArticle/>
    },
    {
      path: "/listCategorie",
      element: <ListCategorie/>
    },
    {
      path: "/listuser",
      element: <ListUser/>
    },
    {
      path: "/updateArticle/:id",
      element: <UpdateArticle/>
    },
    {
      path: "/updateCategorie/:id",
      element: <UpdateCategorie/>
    },
    {
      path: "/updateUser/:id",
      element: <UpdateUser/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path: "/barchart",
      element: <BarChart/>
    }
  ])
  return router;
}

