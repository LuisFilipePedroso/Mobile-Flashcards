import React from 'react'
import {
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  Easing
} from 'react-native'
import Front from './src/components/Front'
import Back from './src/components/Back'

export default class App extends React.Component {
  state = {
    showingBack: false,
    rotate: new Animated.Value(0),
    value: 0
  }

  componentDidMount() {
    const { rotate } = this.state

    rotate.addListener(({ value }) => {
      this.setState({
        value
      })
    })
  }

  handleRotate = () => {
    const { rotate, value, showingBack } = this.state

    if (value >= 90) {
      Animated.spring(rotate, {
        toValue: 0,
        tension: 10,
        friction: 8
      }).start()
    } else {
      Animated.spring(rotate, {
        toValue: 180,
        tension: 10,
        friction: 8
      }).start()
    }

    this.setState({
      showingBack: !showingBack
    })
  }

  render() {
    const { showingBack, rotate } = this.state

    const RotateData = rotate.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })

    const RotateData1 = rotate.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '0deg']
    })

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.handleRotate} style={styles.button}>
          <Text style={styles.text}>Rotate</Text>
        </TouchableOpacity>
        {showingBack === false && (
          <Animated.View
            style={[{ transform: [{ rotateY: RotateData }] }, styles.height]}
          >
            <Front />
          </Animated.View>
        )}

        {showingBack === true && (
          <Animated.View
            style={[{ transform: [{ rotateY: RotateData1 }] }, styles.height]}
          >
            <Back />
          </Animated.View>
        )}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 200,
    height: 30,
    borderWidth: 1,
    borderColor: '#9effb6',
    backgroundColor: '#9effb6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    color: '#4ead64'
  },
  height: {
    height: 500
  }
})
