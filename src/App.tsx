import * as stylex from "@stylexjs/stylex";
import { Hero } from "./components/Hero";
import { FeatureCard } from "./components/FeatureCard";
import { Footer } from "./components/Footer";
import { colors } from "./tokens.stylex";

const styles = stylex.create({
  // Page-level styles that used to live on `body` in styles.css.
  app: {
    boxSizing: "border-box",
    minHeight: "100vh",
    fontFamily: "system-ui, sans-serif",
    color: colors.text,
    backgroundColor: colors.page,
  },
  features: {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
    maxWidth: 860,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 0,
    paddingRight: 24,
    paddingBottom: 64,
    paddingLeft: 24,
  },
});

export function App() {
  return (
    <div {...stylex.props(styles.app)}>
      <Hero />
      <main {...stylex.props(styles.features)}>
        <FeatureCard
          title="Context"
          text="Give Claude the right knowledge at the right time."
        />
        <FeatureCard
          title="Skills"
          text="Turn your best workflows into reusable recipes."
        />
        <FeatureCard
          title="Agents"
          text="Delegate whole tasks and review the results."
        />
      </main>
      <Footer />
    </div>
  );
}
