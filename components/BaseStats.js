import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Headline, List } from 'react-native-paper';
import Avatar from './Avatar';
import InfoText from './InfoText';

const image = require('../assets/header.jpg')

const BaseStats = ({
  confirmedAmount,
  recoveredAmount,
  deathAmount,
  lastUpdate,
}) => {
  return (
    <Card>
      <Card.Cover source={image} />
      <Card.Content>
        <Headline style={styles.headline}>Estado Corona Virus en Chile</Headline>
        <View style={styles.avatarContainer}>
          <Avatar text={confirmedAmount} subtitle="Confirmados" />
        </View>
        <View style={styles.dataContainer}>
          <InfoText
            title={recoveredAmount}
            subtitle="Recuperados"
          />
          <InfoText
            title={deathAmount}
            subtitle="Fallecidos"
          />
        </View>
        <List.Item
          style={styles.dateStyle}
          right={() => <InfoText
            title={lastUpdate}
            subtitle="Ultima Actualización"
          />}
        />
      </Card.Content>
    </Card>
  )
}

export default BaseStats;

const styles = StyleSheet.create({
  headline: { alignSelf: 'center', paddingBottom: 20, fontWeight: 'bold' },
  dataContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  avatarContainer: {
    alignSelf: 'center',
  },
  dateStyle: {
    paddingTop: 40,
    justifyContent: 'flex-end'
  }
})
