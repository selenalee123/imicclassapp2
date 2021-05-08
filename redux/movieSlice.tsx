import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import movieAPI, {Movie} from '../api/movieAPI';

export const fetchMovies = createAsyncThunk<Movie[]>(
  'movies/fetchAll',
  async () => {
    const response = await movieAPI.fetchAll();
    return response?.results;
  },
);

export const fetchMovie = createAsyncThunk<Movie, number>(
  'movies/fetchDetail',
  async (id: number) => {
    const response = await movieAPI.fetchDetail(id);
    return response;
  },
);


type MovieState = {
    isFetching: boolean;
    movies: Movie[];
    error: any;
    isFetchingDetail?: boolean;
    movie?: Movie;
    errorDetail?: any;
  };
  const initialState: MovieState = {
    isFetching: false,
    movies: [],
    error: null,
  };


export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    },
    startIncrementAsync: state => {
      state.isLoading = true;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      state.isLoading = false;
    },
  },
});


export default movieSlice.reducer;
