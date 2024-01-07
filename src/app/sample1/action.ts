"use server";

import { State } from "./page";

const sweets = ["donut", "muffin", "tart"];

export const myFormAction = async (prevState: State, formData: FormData) => {
  const selected = formData.get("sweets");

  if (typeof selected !== "string" || !sweets.includes(selected)) {
    return "invalid value";
  }

  return selected;
};
