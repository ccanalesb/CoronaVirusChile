import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Headline, List } from 'react-native-paper';

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
        <Headline>Estado Corona Virus en Chile</Headline>
        <List.Item
          title={confirmedAmount}
          description="Confirmados"
        />
        <List.Item
          title={recoveredAmount}
          description="Recuperados"
        />
        <List.Item
          title={deathAmount}
          description="Muertes"
        />
        <List.Item
          title={lastUpdate}
          description="Ultima Actualización"
        />
      </Card.Content>
    </Card>
  )
}

export default BaseStats;

const styles = StyleSheet.create({})
