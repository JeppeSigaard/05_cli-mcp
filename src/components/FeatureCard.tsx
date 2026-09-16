import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";

const styles = stylex.create({
  card: {
    boxSizing: "border-box",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.border,
    borderRadius: 12,
    padding: 24,
  },
  title: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 8,
    marginLeft: 0,
  },
  text: {
    margin: 0,
    color: colors.muted,
    fontSize: 14,
    lineHeight: 1.5,
  },
});

interface FeatureCardProps {
  title: string;
  text: string;
}

export function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <article {...stylex.props(styles.card)}>
      <h3 {...stylex.props(styles.title)}>{title}</h3>
      <p {...stylex.props(styles.text)}>{text}</p>
    </article>
  );
}
