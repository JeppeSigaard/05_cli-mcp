import { Hero } from "./components/Hero";
import { FeatureCard } from "./components/FeatureCard";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Hero />
      <main className="features">
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
    </>
  );
}
