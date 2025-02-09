import React from "react";
import { storiesOf } from "@storybook/react-native";
import Pressable from "./Pressable";
import Screen from "../Screen/Screen";
import Text from "../Text/Text";
import { action } from "@storybook/addon-actions";

storiesOf("Pressable", module)
  .addDecorator((getStory) => <Screen>{getStory()}</Screen>)
  .add("Screen", () => (
    <Pressable
      onPress={action("clicked-text")}
      p="m"
      backgroundColor="primary.500"
      androidRippleConfig={{ color: "primary.800" }}
    >
      <Text>asdasda</Text>
    </Pressable>
  ));
