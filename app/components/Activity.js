import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import Tts from 'react-native-tts';

class Activity extends Component {
  render() {
    return (
      <View style={styles.activity}>
        <Text style={styles.timeText}>{this.props.moments}</Text>
        <View style={styles.textView}>
          <Text style={styles.timeText}>{this.props.time} </Text>
          <Card
            containerStyle={this.props.ActivityStyle}
            // image={require('./../../images/taxi.png')}
            image={{uri: `data:image/png;base64,${this.props.imagePath}`}}
            imageStyle={this.props.ImageStyle}>
            <View style={styles.textView}>
              <Text style={styles.activityText}>{this.props.textActivity}</Text>
              <Icon
                size={40}
                name="sound"
                type="antdesign"
                onPress={() => {
                  Tts.speak(
                    this.props.textActivity
                      ? this.props.textActivity
                      : 'No input',
                  );
                }}
              />
            </View>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  timeText: {
    fontSize: 25,
    color: '#393939',
    fontWeight: 'bold',
  },
  activityText: {
    fontSize: 30,
    marginBottom: 10,
    marginHorizontal: 10,
    color: '#393939',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextActivity: {
    backgroundColor: '#F07E7E',
    width: Dimensions.get('window').width - 300,
  },
  nowImage: {
    height: Dimensions.get('window').height / 4,
  },
  nextImage: {
    height: Dimensions.get('window').height / 5,
  },
});

export default Activity;
