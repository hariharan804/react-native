import React, {useState} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ActivityIndicatorExample from '../../components/ActivityIndicatorExample';
import {ButtonPress} from '../../components/ButtonPress';
// import FlateListExample from './app/components/FlateListExample';
import {
  ImageExample,
  ImageBackgroundExample,
} from '../../components/ImageExample';
import ModelExample from '../../components/ModelExample';

const ExampleComponents = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function clickModel() {
    console.log('sds');
    setModalVisible(!modalVisible);
  }
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <View>
            <Text style={styles.header}>Hii Welcome...</Text>
            <ActivityIndicatorExample />
          </View>
          <View style={styles.block}>
            <ButtonPress />
          </View>
          <View style={styles.block}>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>I'm pressable!</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonClose]}>
              <Button
                title="open"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                color="#841fff"
              />
            </Pressable>
          </View>
          <View style={styles.block}>
            <ImageExample />
          </View>
          <View style={styles.block}>
            <ImageBackgroundExample />
          </View>
          {/* <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    > */}
          <View style={styles.block}>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.block}>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.block}>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.block}>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.block}>
            <TextInput style={styles.input} />
          </View>
          {/* </KeyboardAvoidingView> */}
          <View style={styles.block}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5555b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.block}>
            <TouchableOpacity style={styles.button} onPress={clickModel}>
              <Text>Press Here</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.block}>
            <TouchableWithoutFeedback onPress={clickModel}>
              <View style={styles.button}>
                <Text>TouchableWithoutFeedback</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          {/* <View style={styles.block}>
        <FlateListExample />
      </View> */}
        </View>
        <ModelExample visible={modalVisible} clickModel={clickModel} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  block: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    fontFamily: 'Nunito-Bold',
    padding: 10,
    fontSize: 18,
    borderRadius: 8,
  },
  header: {
    fontFamily: 'Nunito-Bold',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    color: '#333',
  },
  details: {
    padding: 20,
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
    lineHeight: 36,
  },
});

export default ExampleComponents;
