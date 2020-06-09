import { Dictionary } from '@onaio/utils';
import { get } from 'lodash';
import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';

export const reducerName = 'Work';

export interface MainImage {
  feature: string;
  highRest?: string;
  lowRes: string;
}

export interface GalleryImage {
  thumb: string;
  gal: string;
  fullRes: string;
}

export interface WorkItem {
  title: string;
  slug: string;
  tags: string[];
  mainImage: MainImage;
  description: string;
  bullets: string[];
  gallery: GalleryImage[];
}

// types of actions
export const FETCH_WORK = 'net.ckellydesign.portfolio/about/FETCH_WORK_ITEMS';
export const FETCH_PROJECTS = 'net.ckellydesign.portfolio/about/FETCH_PROJECTS';

// action typings
export interface FetchWorkAction extends AnyAction {
  type: typeof FETCH_WORK;
  workItemsById: Dictionary<WorkItem>;
};
export interface FetchProjectsAction extends AnyAction {
  type: typeof FETCH_PROJECTS;
  workItemsById: Dictionary<WorkItem>
}

// work item action typings
export type WorkItemActionTypes = FetchWorkAction | FetchProjectsAction | AnyAction;

// interface to describe the Work Item store state
export interface WorkItemState {
  projectById: Dictionary | Dictionary<WorkItem>;
  workById: Dictionary | Dictionary<WorkItem>;
}

export type ImmutableWorkItemState = WorkItemState & SeamlessImmutable.ImmutableObject<WorkItemState>;

export const initialState:ImmutableWorkItemState = SeamlessImmutable({
  projectById: {},
  workById: {},
});

// Work Item reducer
export default function reducer(
  state: WorkItemState = initialState,
  action: WorkItemActionTypes,
) {
  switch (action.type) {
    case FETCH_WORK:
      return SeamlessImmutable({
        ...state,
        workById: { ...action.workItemsById }
      });
    case FETCH_PROJECTS:
      return SeamlessImmutable({
        ...state,
        projectById: { ...action.workItemsById }
      });
    default:
      return state;
  }
};

// fetch work item action creators
export const fetchWork = (workItemsById:Dictionary<WorkItem>):FetchWorkAction => ({
  type: FETCH_WORK,
  workItemsById,
});

export const fetchProjects = (workItemsById:Dictionary<WorkItem>):FetchProjectsAction => ({
  type: FETCH_PROJECTS,
  workItemsById,
});

// work item selectors
export const getWorkById = (state:Partial<Store>):Dictionary<WorkItem> =>
  (state as any)[reducerName].workById;
export const getWorkByKey = (state:Partial<Store>, key:string):WorkItem | null => 
  get(getWorkById(state), key) || null;

export const getProjectById = (state:Partial<Store>):Dictionary<WorkItem> =>
  (state as any)[reducerName].projectById;
export const getProjectByKey = (state:Partial<Store>, key:string):WorkItem | null =>
  get(getProjectById(state), key) || null;

