import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import store from "../store/store";
import { Project, getProject, updateProject } from "../store/portfolio";
import Gallery from "../components/Gallery";

export interface GalleryLoaderProps {
  [key: string]: any;
}

export const galleryLoader = async ({ params }: GalleryLoaderProps) => {
  const project = getProject(store.getState(), params.slug);
  if (project && project.gallery) {
    return { project };
  } else if (project) {
    const response = await fetch(`/data/${project.slug}.json}`);
    const loadedProject = await response.json() as Promise<Project>;
    store.dispatch(updateProject(loadedProject));
    return { project: loadedProject };
  } else {
    return {};
  }
}

export const galleryRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={null}>
      <Route path=":slug" element={<Gallery />} loader={galleryLoader} />
    </Route>
  )
)
