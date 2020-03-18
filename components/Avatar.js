import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Title } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Avatar = ({ text, subtitle }) => {
  return (
    <>
      <View style={styles.iconWrapper}>
        <Text style={[styles.iconText]}>{text}</Text>
        <Title>{subtitle}</Title>
      </View>

    </>
  )
}

export default Avatar

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: Colors.light,
    height: 200,
    borderRadius: 100,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    marginTop: 30,
    color: Colors.black,
    fontSize: 80,
    lineHeight: 200,
  },
})
