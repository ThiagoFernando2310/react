
import { getDefaultStore } from "jotai";
import { createBrowserRouter } from "react-router-dom";
import { Dados } from "../Pages/dados";
import { Inicio } from "../Pages/inicio";
import { userNameAtom } from "../atoms/user";
import { Requisicao } from "../Pages/requisicoes";
import { Playground } from "../Pages/playground";
import { Layout } from "./layout";
import { ErrorPage } from "../components/Error";
import { NaoEncontrado } from "../components/NaoEncontrado";

const store = getDefaultStore();

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
        element: <Inicio />,
        loader: () => {
          const username = store.get(userNameAtom);
          if (!username) {
            throw new Response("Username not found", { status: 302, headers: { Location: "/" } });
          }
          return null;
        },
      },
      {
        path: "requisicao",
        element: <Requisicao />,
        loader: () => {
          const username = store.get(userNameAtom);
          if (!username) {
            throw new Response("Username not found", { status: 302, headers: { Location: "/" } });
          }
          return null;
        },
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
