import React, { useCallback, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import useForceUpdate from 'use-force-update';
import BaseStats from '../components/BaseStats';
import useFetcher from '../hooks/fetcher';
import { baseApi } from '../utils/const';
import { parseDateToString } from '../utils/datesUtils';

const wait = (timeout) => new Promise(resolve => {
  setTimeout(resolve, timeout);
});

const handleOnAdLoaded = (arg) => {
  console.log('ad loaded!');
  console.log(args);
};

const Main = () => {
  const forceUpdate = useForceUpdate();
  const { stats, loading, error } = useFetcher(baseApi);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
      forceUpdate();
    });
  }, [refreshing]);

  if (loading) return <View><ActivityIndicator animating={loading} color={Colors.blue500}></ActivityIndicator></View>
  if (error) return <View><Text>Error</Text></View>

  const {
    confirmed: { value: confirmedAmount },
    recovered: { value: recoveredAmount },
    deaths: { value: deathAmount },
    lastUpdate,
  } = stats
  console.log('call')

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <BaseStats
          confirmedAmount={confirmedAmount}
          recoveredAmount={recoveredAmount}
          deathAmount={deathAmount}
          lastUpdate={parseDateToString(lastUpdate)}
        />
        {/* <GraphicStats></GraphicStats> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
})
