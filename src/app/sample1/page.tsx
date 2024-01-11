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
        {["donuts", "muffin", "tart", "rice", "error"].map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <button>Submit</button>
      {state}
    </form>
  );
}
