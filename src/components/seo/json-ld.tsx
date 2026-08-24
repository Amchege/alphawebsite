interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders a JSON-LD script tag for structured data.
 * Accepts any valid schema.org object.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}