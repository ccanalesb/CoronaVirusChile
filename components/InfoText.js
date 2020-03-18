import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption, Title } from 'react-native-paper';

const InfoText = ({ title = 'title', subtitle = 'subtitle' }) => {
  return (
    <View>
      <Title style={styles.titleStyle}>{title}</Title>
      <Caption>{subtitle}</Caption>
    </View>
  )
}

export default InfoText

const styles = StyleSheet.create({
  titleStyle: {
    alignSelf: 'center'
  }
})
