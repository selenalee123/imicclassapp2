import {RouteProp, useRoute} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovie} from '../../redux/movieSlice';
import {AppDispatch, RootState} from '../../redux/store';
import {
  MainStackParamList,
  MainStackScreenProps,
} from '../../stacks/Navigation';
import MovieItem from './MovieScreenItem';
const MovieScreenDetail: React.FC<MainStackScreenProps<'MovieDetailRedux'>> = ({
  route,
}) => {
  const route2 = useRoute<RouteProp<MainStackParamList, 'MovieDetailRedux'>>();
  const dispatch: AppDispatch = useDispatch();
  const {movie, isFetchingDetail, errorDetail} = useSelector(
    (state: RootState) => state?.movie,
  );

  console.log(route?.params?.id);

  useEffect(() => {
    if (route2?.params?.id) {
      dispatch(fetchMovie(route2?.params?.id));
    }
  }, [dispatch, route2?.params?.id]);

  return (
    <View style={styles.container}>
      {isFetchingDetail ? (
        <ActivityIndicator color="red" />
      ) : movie ? (
        <MovieItem item={movie} />
      ) : (
        <Text>{errorDetail?.toString()}</Text>
      )}
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default MovieScreenDetail;
