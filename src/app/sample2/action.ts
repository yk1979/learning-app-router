"use server";

import { State } from "./page";

const sweets = ["donut", "muffin", "tart"];

export const myFormAction = async (
  prevState: State,
  formData: FormData,
): Promise<State> => {
  const selected = formData.get("sweets");

  // JS off 環境ではエラーハンドリングはできない
  if (typeof selected !== "string" || selected === "error") {
    throw new Error("value must be string.");
  }

  if (!sweets.includes(selected)) {
    return {
      ...prevState,
      error: { code: 400, message: `${selected} is not sweets!` },
    };
  }

  return {
    data: selected,
    error: null,
  };
};
