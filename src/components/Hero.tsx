import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";

const styles = stylex.create({
  hero: {
    boxSizing: "border-box",
    paddingTop: 96,
    paddingRight: 24,
    paddingBottom: 64,
    paddingLeft: 24,
    textAlign: "center",
  },
  title: {
    fontSize: 48,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 12,
    marginLeft: 0,
  },
  tagline: {
    fontSize: 18,
    color: colors.muted,
    margin: 0,
  },
});

export function Hero() {
  return (
    <header {...stylex.props(styles.hero)}>
      <h1 {...stylex.props(styles.title)}>Teach Claude</h1>
      <p {...stylex.props(styles.tagline)}>
        The better you teach your agent, the better it works for you.
      </p>
    </header>
  );
}
