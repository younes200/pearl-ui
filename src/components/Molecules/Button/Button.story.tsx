import React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import Button from "./Button";
import Screen from "../../Atoms/Screen/Screen";
import Icon from "../../Atoms/Icon/Icon";

storiesOf("Button", module)
  .addDecorator((getStory) => <Screen>{getStory()}</Screen>)
  .add("Sizes", () => (
    <>
      <Button onPress={action("clicked-text")} size="xs">
        Button text
      </Button>
      <Button
        onPress={action("clicked-text")}
        size="xs"
        leftIcon={<Icon iconFamily="AntDesign" iconName="forward" />}
      >
        Button text
      </Button>

      <Button onPress={action("clicked-text")} size="s">
        Button text
      </Button>
      <Button
        onPress={action("clicked-text")}
        size="s"
        leftIcon={<Icon iconFamily="AntDesign" iconName="forward" />}
      >
        Button text
      </Button>

      <Button onPress={action("clicked-text")} size="m">
        Button text
      </Button>
      <Button
        onPress={action("clicked-text")}
        size="m"
        leftIcon={<Icon iconFamily="AntDesign" iconName="forward" />}
      >
        Button text
      </Button>

      <Button onPress={action("clicked-text")} size="l">
        Button text
      </Button>
      <Button
        onPress={action("clicked-text")}
        size="l"
        leftIcon={<Icon iconFamily="AntDesign" iconName="forward" />}
      >
        Button text
      </Button>
    </>
  ))
  .add("Variants", () => (
    <>
      <Button onPress={action("clicked-text")} variant="filled">
        Button text
      </Button>
      <Button onPress={action("clicked-text")} variant="outline">
        Button text
      </Button>
      <Button onPress={action("clicked-text")} variant="ghost">
        Button text
      </Button>
    </>
  ))
  .add("Disabled", () => (
    <>
      <Button onPress={action("clicked-text")} isDisabled>
        Button text
      </Button>
      <Button onPress={action("clicked-text")} isFullWidth isDisabled>
        Button text
      </Button>
    </>
  ))
  .add("Loading", () => (
    <>
      <Button onPress={action("clicked-text")} size="xs" isLoading>
        Button text
      </Button>
      <Button
        onPress={action("clicked-text")}
        size="xs"
        loadingText="Loading"
        isLoading
      >
        Button text
      </Button>
      <Button onPress={action("clicked-text")} size="s" isLoading>
        Rename variable to Bob
      </Button>

      {/* <Button
        onPress={action("clicked-text")}
        size="s"
        loadingText="Loading"
        isLoading
      >
        Rename variable to Bob
      </Button> */}
      <Button
        backgroundColor="neutral.600"
        onPress={action("clicked-text")}
        isLoading={true}
        size="s"
        mb="l"
        loadingText="Renaming"
        alignSelf="flex-end"
      >
        Rename variable to Bob
      </Button>

      <Button onPress={action("clicked-text")} size="m" isLoading>
        Button text
      </Button>

      <Button
        onPress={action("clicked-text")}
        size="m"
        loadingText="Loading"
        isLoading
      >
        Button text
      </Button>
      <Button onPress={action("clicked-text")} size="l" isLoading>
        Button text
      </Button>

      <Button
        onPress={action("clicked-text")}
        size="l"
        loadingText="Loading"
        isLoading
      >
        Button text
      </Button>
    </>
  ))
  .add("Color Scheme", () => (
    <>
      <Button onPress={action("clicked-text")} isFullWidth>
        Button text
      </Button>
      <Button onPress={action("clicked-text")} variant="outline" isFullWidth>
        Button text
      </Button>
      <Button
        onPress={action("clicked-text")}
        colorScheme="secondary"
        isFullWidth
      >
        Button text
      </Button>
      <Button
        onPress={action("clicked-text")}
        variant="outline"
        colorScheme="secondary"
        isFullWidth
      >
        Button text
      </Button>
    </>
  ));
