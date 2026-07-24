// Renders a JSON-LD payload as an inline <script type="application/ld+json">.
//
// JSON.stringify does not escape HTML, so a "</script>" inside any string value
// would break out of the tag. Replacing "<" with its unicode escape closes that
// XSS hole and is still valid JSON — this is the approach Next's JSON-LD guide
// prescribes. A native <script> is correct here rather than next/script, which
// is built for executable JavaScript; this is inert data.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
