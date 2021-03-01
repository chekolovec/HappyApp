import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable, View } from "react-native";

import { MainScreen, SettingsScreen } from "../screens";
import styles from "./styles";
import BackArrow from "../assets/img/back.svg";

const Stack = createStackNavigator();

interface IOptions {
  navigation: {
    goBack: () => void;
  };
}

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerTitleStyle: styles.title,
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name="Main"
      options={{
        title: "Дневник",
      }}
      component={MainScreen}
    />
    <Stack.Screen
      name="Settings"
      options={({ navigation }: IOptions) => ({
        title: "Заполнить дневник",
        headerLeft: (props) => (
          <Pressable
            style={styles.backArrow}
            onPress={() => navigation.goBack()}
          >
            <BackArrow />
          </Pressable>
        ),
      })}
      component={SettingsScreen}
    />
  </Stack.Navigator>
);
