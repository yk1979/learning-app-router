import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export const AlertDialog: React.FC<Props> = (props) => {
  const { children, buttonProps } = props;
  return (
    <div className={styles.portal}>
      <div className={styles.overlay} />
      <div className={styles.dialog} role="alertdialog">
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <button {...buttonProps} className={styles.button} />
        </div>
      </div>
    </div>
  );
};
