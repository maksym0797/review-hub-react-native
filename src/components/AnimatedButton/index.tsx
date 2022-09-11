import React, {FC} from 'react';
import {StyleSheet, Text, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {
  TapGestureHandler,
  TapGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {COLORS} from '../../constants/colors';
import {scale} from '../../utils/sizes';

interface IProps extends TapGestureHandlerProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onSubmit: () => void;
}

const AnimatedButton: FC<IProps> = props => {
  const {text, buttonStyle, textStyle, onSubmit} = props;
  const pressed = useSharedValue(false);
  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      runOnJS(onSubmit)();
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(pressed.value ? 0.9 : 1),
        },
      ],
    };
  });
  return (
    <TapGestureHandler onGestureEvent={eventHandler}>
      <Animated.View
        style={[styles.buttonContainer, buttonStyle, animatedStyle]}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: scale(280),
    height: scale(44),
    borderRadius: scale(18),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_PURPLE,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.07,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: scale(18),
    fontWeight: '500',
  },
});
