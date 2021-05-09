import React, {useCallback, useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Movie} from '../../api/movieAPI';


export type Props = {
    item: Movie;
    onPress?: (item: Movie) => void;
  };
export default function MovieItem({ item, onPress }: Props) {
    const movieImage = useMemo(
        () => ({
          uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
        }),
        [item],
      );
      console.log('MovieItem', item);
      console.log('movieImage', movieImage);
      const localPress = useCallback(() => {
        onPress?.(item);
      }, [item, onPress]);
    
      return (
        <TouchableOpacity onPress={localPress}>
          <View style={styles.movieItem}>
            <View style={styles.movieDescription}>
              <Image style={styles.movieImage} source={movieImage} />
              <View style={styles.textContainer}>
                <Text
                  numberOfLines={6}
                  ellipsizeMode={'tail'}
                  style={styles.movieOverview}>
                  {item?.overview}
                </Text>
              </View>
            </View>
            <Text
              style={styles.movieTitle}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {item?.original_title}, {item?.release_date}
            </Text>
          </View>
        </TouchableOpacity>
      );
    
}

export const styles = StyleSheet.create({
    textContainer: {
      flex: 1,
    },
    movieItem: {
      flexDirection: 'column',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 20,
      padding: 10,
    },
    movieImage: {
      width: 100,
      height: 100,
    },
    movieTitle: {
      color: 'black',
      fontWeight: '500',
      fontSize: 20,
    },
    movieDescription: {
      flexDirection: 'row',
    },
    movieOverview: {
      padding: 5,
      color: 'gray',
      width: '100%',
    },
  });
  