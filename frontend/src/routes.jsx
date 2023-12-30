import { useRoutes } from "react-router-dom";

import Home from './components/home'
import AjoutArticle from './components/ajoutArticle';
import DetailArticle from './components/detailArticle';
import ListeArticle from './components/listeArticle';
import UpdateArticle from './components/updateArticle';
import  AjoutCategorie from './components/ajoutCategorie';
import ListCategorie from './components/listCategorie';
import UpdateCategorie from './components/updateCategorie';


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
      path: "/updateArticle/:id",
      element: <UpdateArticle/>
    },
    {
      path: "/updateCategorie/:id",
      element: <UpdateCategorie/>
    }


  ])
  return router;
}

