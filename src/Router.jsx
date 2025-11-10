import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './home/HomePage';
import PostsPage from './posts/PostsPage';
import RandomAnimalsPage from './randomAnimals/RandomAnimalsPage';


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/posts",
    Component: PostsPage,
  },
  {
    path: "/randomAnimals",
    Component: RandomAnimalsPage,
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}