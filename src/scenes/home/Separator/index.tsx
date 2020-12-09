import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 0.5,
    marginHorizontal: 20,
  },
})

export const Separator: React.FC<{}> = () => <View style={styles.container} />