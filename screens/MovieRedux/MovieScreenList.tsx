import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';
import {Movie} from '../../api/movieAPI';
import MovieItem from './MovieScreenItem';
const SCROLL_INSET = {right: 1};
export type Props = {
  movies: Movie[];
  isFetching: boolean;
  onPress: (item: Movie) => void;
};
const MovieScreenList = (props: Props) => {
  const keyExtractor = useCallback(
    (item: Movie, index): string => (item?.id ?? 0 + index).toString(),
    [],
  );
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Movie>) => (
      <MovieItem onPress={props.onPress} item={item} />
    ),
    [props.onPress],
  );

  return (
    <View style={styles.container}>
      {props.isFetching ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <FlatList
          scrollIndicatorInsets={SCROLL_INSET}
          data={props.movies}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MovieScreenList;
