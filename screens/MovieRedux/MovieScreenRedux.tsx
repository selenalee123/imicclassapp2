import React, {useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Movie} from '../../api/movieAPI';
import {fetchMovies} from '../../redux/movieSlice';
import {AppDispatch, RootState} from '../../redux/store';
import {MainStackScreenProps} from '../../stacks/Navigation';
import MovieScreenList from './MovieScreenList';
const MovieScreenRedux: React.FC<MainStackScreenProps<'MovieRedux'>> = ({
  navigation,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const {movies, isFetching} = useSelector((state: RootState) => state?.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const onMovieItemPress = useCallback(
    (item: Movie) => {
      navigation.navigate('MovieDetailRedux', {id: item.id});
    },
    [navigation],
  );

  return (
    <MovieScreenList
      onPress={onMovieItemPress}
      isFetching={isFetching}
      movies={movies}
    />
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MovieScreenRedux;
