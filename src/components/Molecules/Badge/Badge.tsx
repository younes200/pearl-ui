import React from "react";
import Center from "../../Atoms/Center/Center";
import { useMolecularComponentConfig } from "../../../hooks/useMolecularComponentConfig";
import Text from "../../Atoms/Text/Text";
import { BoxProps } from "../../Atoms/Box/Box";
import { useColorScheme } from "../../../hooks/useColorScheme";

export type BadgeProps = BoxProps & {
  /** The size of the badge */
  size?: string;
  /** The variant of the badge */
  variant?: string;
  /** Active color palette of the badge */
  colorScheme?: string;
};

/** A Badge is a small component typically used to communicate a numerical value or indicate the status of an item to the user. */
const Badge: React.FC<BadgeProps> = ({ children, ...rest }) => {
  let molecularProps = useMolecularComponentConfig(
    "Badge",
    rest,
    {
      size: rest.size,
      variant: rest.variant,
    },
    rest.colorScheme
  );

  const renderValue = () => {
    if (!children) return null;

    if (Array.isArray(children))
      children = (children as Array<string | number>).join("");

    if (typeof children === "number" || typeof children === "string")
      return <Text {...molecularProps.text}>{children}</Text>;
    else return React.cloneElement(children as React.ReactElement);
  };

  return (
    <Center {...molecularProps.root} alignSelf="flex-start">
      {renderValue()}
    </Center>
  );
};

export default Badge;
