interface FeatureCardProps {
  title: string;
  text: string;
}

export function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
