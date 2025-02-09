import React from "react";
import { storiesOf } from "@storybook/react-native";
import Input from "./Input";
import Screen from "../../Atoms/Screen/Screen";
import Icon from "../../Atoms/Icon/Icon";
import Pressable from "../../Atoms/Pressable/Pressable";

storiesOf("Input", module)
  .addDecorator((getStory) => <Screen>{getStory()}</Screen>)
  .add("Sizes", () => {
    return (
      <>
        <Input
          size="xs"
          isFullWidth
          placeholder="This is an xs input"
          leftIcon={<Icon iconFamily="Ionicons" iconName="md-lock-closed" />}
        />

        <Input
          size="s"
          isFullWidth
          placeholder="This is an s input"
          leftIcon={<Icon iconFamily="Ionicons" iconName="md-lock-closed" />}
        />

        <Input
          size="m"
          isFullWidth
          placeholder="This is an m input"
          hasClearButton
          leftIcon={<Icon iconFamily="Ionicons" iconName="md-lock-closed" />}
          rightIcon={<Icon iconFamily="Ionicons" iconName="ios-eye" />}
        />

        <Input
          size="l"
          isFullWidth
          placeholder="This is an l input"
          leftIcon={<Icon iconFamily="Ionicons" iconName="md-lock-closed" />}
        />
      </>
    );
  })
  .add("Variants", () => (
    <>
      <Input
        size="m"
        isFullWidth
        variant="filled"
        placeholder="This is the filled input"
        leftIcon={<Icon iconFamily="Ionicons" iconName="md-lock-closed" />}
      />

      <Input
        size="m"
        variant="outline"
        isFullWidth
        placeholder="This is the outlines input"
        leftIcon={<Icon iconFamily="Ionicons" iconName="md-lock-closed" />}
      />
    </>
  ))
  .add("States", () => (
    <>
      <Input isFullWidth variant="filled" placeholder="Default Filled Input" />
      <Input
        isFullWidth
        variant="outline"
        placeholder="Default Outline Input"
      />
      <Input isFullWidth placeholder="Focused Input" autoFocus />
      <Input isFullWidth isDisabled placeholder="Disabled Input" />
      <Input isFullWidth placeholder="Error Input" isInvalid />
      <Input
        isFullWidth
        placeholder="Error Input with message"
        isInvalid
        errorMessage="This is an error message!"
      />
    </>
  ))
  .add("TextArea", () => (
    <>
      <Input multiline isFullWidth placeholder="asdlaknsdlakn" />
    </>
  ))
  .add("Disabled", () => (
    <>
      <Input
        size="m"
        isFullWidth
        isDisabled
        variant="filled"
        placeholder="This is the filled input"
        leftIcon={<Icon iconFamily="Ionicons" iconName="md-lock-closed" />}
      />
    </>
  ));
