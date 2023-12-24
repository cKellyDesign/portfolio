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
    gal: string;
    fullRes: string;
  }[];
}

export interface PortfolioState {
  experience: { [key: string]: Project };
}

export const FETCH_PORTFOLIO = "portfolio/fetchPortfolio";
export const LOADING_PROJECT = "portfolio/loadingProject";
export const UPDATE_PROJECT = "portfolio/updateProject";

export const fetchInitialState = createAsyncThunk(
  FETCH_PORTFOLIO,
  async () => {
    const response = await fetch("/data/portfolio.json");
    return response.json();
  },
);

export const portfolioSlice: Slice<
  any,
  SliceCaseReducers<any>,
  string
> = createSlice({
  name: portfolioSliceName,
  initialState: {},
  reducers: {
    [LOADING_PROJECT]: (state, action) => {
      const { slug } = action.payload;
      state.experience[slug].loading = true;
    },
    [UPDATE_PROJECT]: (state, action) => {
      const { slug, project } = action.payload;
      state.experience[slug] = { ...state.experience[slug], ...project };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialState.fulfilled, (state:any, action) => {
      state = action.payload;
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
  return Object.values(portfolio.experience);
};

export const useProject = (slug: string): Project => {
  const portfolio = usePortfolio();
  return portfolio.experience[slug];
};

export const getPortfolio = (state: any): PortfolioState => {
  return state[portfolioSliceName];
};

export const getProject = (state: any, slug: string): Project => {
  return state[portfolioSliceName].experience[slug];
};
