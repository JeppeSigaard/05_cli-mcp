import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";

const styles = stylex.create({
  footer: {
    boxSizing: "border-box",
    paddingTop: 32,
    paddingRight: 24,
    paddingBottom: 32,
    paddingLeft: 24,
    textAlign: "center",
    color: colors.subtle,
    fontSize: 13,
  },
});

export function Footer() {
  return (
    <footer {...stylex.props(styles.footer)}>
      Built live in the Claude Code course.
    </footer>
  );
}
