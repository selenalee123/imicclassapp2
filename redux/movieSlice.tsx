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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, (state, _action) => {
      state.isFetching = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.isFetching = false;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    });
    builder.addCase(fetchMovie.pending, (state, _action) => {
      state.isFetchingDetail = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.isFetchingDetail = false;
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.errorDetail = action.payload;
      state.isFetchingDetail = false;
    });

  }
});


export default movieSlice.reducer;
