type Props = {
  warning?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<"p">;

export const Message: React.FC<Props> = (props) => {
  const { warning = false, children } = props;
  return <p style={{ color: warning ? "red" : "white" }}>{children}</p>;
};
