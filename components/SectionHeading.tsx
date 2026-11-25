export default function SectionHeading({ eyebrow, title, accent, description, light = false }: { eyebrow: string; title: string; accent?: string; description?: string; light?: boolean }) {
 return <div className={`section-heading ${light ? 'section-heading-light' : ''}`}><div className="eyebrow"><span/>{eyebrow}</div><h2 className="display-heading">{title} {accent && <em>{accent}</em>}</h2>{description && <p>{description}</p>}</div>;
}
