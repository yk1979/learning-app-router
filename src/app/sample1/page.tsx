"use client";

import styles from "./page.module.css";

import { useFormState } from "react-dom";
import { Message } from "../_components/Message";
import { Select } from "../_components/Select";
import { myFormAction } from "./action";

export type State = string;
export const initialState: State = "";

export default function Page() {
  const [state, dispatch] = useFormState(myFormAction, initialState);
  return (
    <form className={styles.form} action={dispatch}>
      <Select name="sweets" defaultValue={state} />
      <button>Submit</button>
      <Message>{state}</Message>
    </form>
  );
}
