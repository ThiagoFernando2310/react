
import { createBrowserRouter } from "react-router-dom";
import { Dados } from "../pages/Dados";
import { BoasVindas } from "../pages/BoasVindas";
import { Requisicao } from "../pages/Requisicoes";
import { Playground } from "../pages/Playground";
import { Layout } from "../components/layout";
import { ErrorPage } from "../components/Error";
import { NaoEncontrado } from "../components/NaoEncontrado";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dados />,
      },
      {
        path: "inicio",
        element: <BoasVindas />,
      },
      {
        path: "requisicao",
        element: <Requisicao />,
      },
      {
        path: "playground/:codigo",
        element: <Playground />,
      },
      {
        path: "*",
        element: <NaoEncontrado />,
      },
    ],
  },
]);
