import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

interface Props { }

export const MovieScreenRanking = (_props: Props) => {
  const tmdbImageUri = 'https://image.tmdb.org/t/p/w185';
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=039501b3df09abb075a99d3035281b5c&language=en-US&page=1',
    )
      .then(responseJson => responseJson.json())
      .then(json => setData(json.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>List of Movie with Highest Ranking</Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.box}>
                <View style={styles.image}>

                  <Image
                    style={styles.posterImage}
                    source={{ uri: `${tmdbImageUri}/${item.backdrop_path}` }}
                  />
                </View>

                <View style={styles.world}>

                  <Text style={styles.title}>{item.title}</Text>
                  <Text>{item.release_date}</Text>
                </View>



              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {


    marginBottom: 20,
  },
  posterImage: {
    height: 80,
    width: 60
  },
  box: {
    flex: 1,
    flexDirection: "row"
  },
  world: {
    marginTop: 20,
    flexDirection: "column",
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
