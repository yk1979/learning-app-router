"use server";

import { State } from "./page";

const sweets = ["donut", "muffin", "tart"];

export const myFormAction = async (prevState: State, formData: FormData) => {
  const selected = formData.get("sweets");

  // JS off 環境ではエラーハンドリングはできない
  if (typeof selected !== "string" || selected === "error") {
    throw new Error("value must be string.");
  }

  if (!sweets.includes(selected)) {
    return `${selected} is not sweets!`;
  }

  return selected;
};
