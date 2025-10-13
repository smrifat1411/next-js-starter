// Example: Testimonial section component
'use client';

import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Developer',
    content: 'This starter template saved me hours of setup time!',
  },
  {
    name: 'Jane Smith',
    role: 'Designer',
    content: 'The component structure is clean and easy to understand.',
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Users Say
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <p className="mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
