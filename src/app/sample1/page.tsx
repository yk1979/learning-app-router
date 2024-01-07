"use client";

import styles from "./page.module.css";

import { useFormState } from "react-dom";
import { myFormAction } from "./action";

export type State = string;
export const initialState: State = "";

export default function Page() {
  const [state, dispatch] = useFormState(myFormAction, initialState);
  return (
    <form className={styles.form} action={dispatch}>
      <select name="sweets" defaultValue={state}>
        <option value="donuts">donuts</option>
        <option value="muffin">muffin</option>
        <option value="tart">tart</option>
        <option value="rice">rice</option>
      </select>
      <button>Submit</button>
      {state}
    </form>
  );
}
