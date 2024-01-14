"use client";

import styles from "./page.module.css";

import { useFormState } from "react-dom";
import { Message } from "../_components/Message";
import { Select } from "../_components/Select";
import { myFormAction } from "./action";

export type ErrorType = { code: number; message: string };
export type State = {
  data: string;
  error: ErrorType | null;
};
export const initialState: State = {
  data: "",
  error: null,
};

export default function Page() {
  const [state, dispatch] = useFormState(myFormAction, initialState);
  return (
    <form className={styles.form} action={dispatch}>
      <Select name="sweets" defaultValue={state.data} />
      <button>Submit</button>
      <Message warning={state.error !== null}>
        {state.error ? state.error.message : state.data}
      </Message>
    </form>
  );
}
