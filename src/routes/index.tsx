import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export const initPortfolioRouter = (element: any) => createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={element}>
      <Route path="gallery/:slug" element={element}/>
    </Route>
  )
);
