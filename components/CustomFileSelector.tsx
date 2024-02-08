import classNames from "classnames";
import React, { ComponentPropsWithRef } from "react";
import { Input } from "@/components/ui/input";

type Props = ComponentPropsWithRef<"input">;

const CustomFileSelector = (props: Props) => {
  return (
    <Input
      {...props}
      type="file"
      multiple
    />
  );
};

export default CustomFileSelector;