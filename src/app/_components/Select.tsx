import { ComponentPropsWithoutRef } from "react";

export const Select = (props: ComponentPropsWithoutRef<"select">) => {
  return (
    <select {...props}>
      {["donuts", "muffin", "tart", "rice", "error"].map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
