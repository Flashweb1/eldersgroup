import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import Reveal, { Stagger, StaggerItem } from '@/components/motion';

/**
 * Client voices band. Renders nothing while `testimonials` in lib/data.ts is
 * empty — add real client quotes there and this section appears automatically.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section-pad testimonial-band">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">CLIENT VOICES</div>
          <h2>
            Trusted by the people<br />
            <em>we serve.</em>
          </h2>
        </div>
        <Stagger className="testimonial-grid">
          {testimonials.slice(0, 3).map((t) => (
            <StaggerItem key={t.name} className="testimonial-card">
              <Quote size={26} className="testimonial-mark" aria-hidden="true" />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
