import { createAsyncThunk, createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const portfolioSliceName = "portfolio";

export interface Project {
  loaded: boolean;
  loading: boolean;
  title: string;
  mainImage: {
    url: string;
    alt: string;
  };
  slug?: string;
  tags?: string[];
  description?: string;
  bullets?: string[];
  gallery?: {
    thumb: string;
    alt: string;
    caption: string;
    gal: string;
    fullRes: string;
  }[];
}

export interface ProjectFilter {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PortfolioState {
  experience: { [key: string]: Project };
  filters: {[key: string]: ProjectFilter};
}

export const FETCH_PORTFOLIO = "portfolio/fetchPortfolio";
export const FETCH_PROJECT = "portfolio/fetchProject";
export const LOADING_PROJECT = "portfolio/loadingProject";
export const UPDATE_PROJECT = "portfolio/updateProject";

export const fetchInitialState = createAsyncThunk(
  FETCH_PORTFOLIO,
  async () => {
    const response = await fetch("/data/portfolio.json");
    return response.json();
  },
);

export const fetchProject = createAsyncThunk(
  FETCH_PROJECT,
  async (slug: string) => {
    const response = await fetch(`/data/${slug}.json`);
    return response.json();
  },
);

export const portfolioSlice: Slice<
  any,
  SliceCaseReducers<any>,
  string
> = createSlice({
  name: portfolioSliceName,
  initialState: {
    experience: {},
    filters: {},
  },
  reducers: {
    [LOADING_PROJECT]: (state, action) => {
      const { slug } = action.payload;
      state.experience[slug].loading = true;
    },
    [UPDATE_PROJECT]: (state, action) => {
      const { slug } = action.payload;
      state.experience[slug] = { ...state.experience[slug], ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialState.fulfilled, (state:any, action) => {
      Object.keys(action.payload.experience).forEach((key:string) => {
        if (state.experience[key]?.loaded) {
          // if an experience is already loaded, keep the loaded state
          state.experience[key] = { ...action.payload.experience[key], ...state.experience[key] };
        } else if (state.experience[key]) {
          // if an experience exists in state but isn't loaded, replace it
          state.experience[key] = { ...state.experience[key], ...action.payload.experience[key] };
        } else {
          // if an experience doesn't exist in state yet, add it
          state.experience[key] = action.payload.experience[key];
        }
      });
      Object.keys(action.payload.filters).forEach((key:string) => {
        state.filters[key] = action.payload.filters[key];
      });
      return state;
    });
  },
});

export const loadingProject = portfolioSlice.actions[LOADING_PROJECT];
export const updateProject = portfolioSlice.actions[UPDATE_PROJECT];

export const usePortfolio = (): PortfolioState => {
  return useSelector((state: any) => state[portfolioSliceName]);
};

export const useProjectsArray = (): Project[] => {
  const portfolio = usePortfolio();
  return Object.values(portfolio.experience || {});
};

export const useProject = (slug: string): Project => {
  const portfolio = usePortfolio();
  return portfolio.experience[slug];
};

export const useFilters = (): {[key:string]:ProjectFilter} => {
  const portfolio = usePortfolio();
  return portfolio.filters;
}

export const useFiltersArray = (): ProjectFilter[] => {
  const portfolio = usePortfolio();
  return Object.values(portfolio.filters || {});
}

export const useFilter = (slug: string): ProjectFilter | undefined => {
  const portfolio = usePortfolio();
  return portfolio.filters[slug];
}

export const getPortfolio = (state: any): PortfolioState => {
  return state[portfolioSliceName];
};

export const getProject = (state: any, slug: string): Project => {
  return state[portfolioSliceName].experience[slug];
};

export const getFilters = (state: any): {[key:string]:ProjectFilter} => {
  return state[portfolioSliceName].filters;
}

export const getFilter = (state: any, slug: string): ProjectFilter => {
  return state[portfolioSliceName].filters[slug];
}
