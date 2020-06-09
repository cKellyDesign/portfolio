import { Dictionary } from '@onaio/utils';
import { get } from 'lodash';
import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';

export { aboutModel } from './model';

export const reducerName = 'About';

// interface describing About - Highlights model
export interface Highlight {
  title: string;
  paragraph: string;
  tags: string[];
}

// interface describing About model
export interface About {
  pitch: string;
  highlights: Highlight[];
}

// action types
export const FETCH_ABOUT = 'net.ckellydesign.portfolio/about/FETCH_ABOUT';

// actions
export interface FetchAboutAction extends AnyAction {
  type: typeof FETCH_ABOUT;
  aboutById: Dictionary<About>;
};

// about action types
export type AboutActionTypes = FetchAboutAction | AnyAction;

// interface to describe the About store state
export interface AboutState {
  aboutById: Dictionary | Dictionary<About>
};

// action types for About reducer
export type ImmutableAboutState = AboutState & SeamlessImmutable.ImmutableObject<AboutState>;

// initial state for About store
export const initialState:ImmutableAboutState = SeamlessImmutable({
  aboutById: {}
});

// About reducer
export default function reducer(
  state: AboutState = initialState,
  action: AboutActionTypes
) {
  switch (action.type) {
    case FETCH_ABOUT:
      const fetchAboutState = {
        ...state,
        aboutById: {
          ...state.aboutById,
          ...action.aboutById,
        },
      };
      return SeamlessImmutable(fetchAboutState);
    default:
      return state;
  }
};

// fetch about action creator
export const fetchAbout = (aboutById:Dictionary<About>):FetchAboutAction => ({
  aboutById,
  type: FETCH_ABOUT,
});

// about selectors

// selector to get entire About store
export const getAboutById = (state:Partial<Store>):Dictionary<About> => {
  return (state as any)[reducerName].aboutById;
}

// selector to get single About entry
export const getAboutByKey = (state:Partial<Store>, key:string): About | null =>
  get(getAboutById(state), key) || null;
