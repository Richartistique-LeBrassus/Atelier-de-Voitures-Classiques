export default function Head({ params }: { params: { slug: string } }) {
  // Your SAMPLE_VEHICLE is client-side only, so we can’t import it.
  // Instead, we show a readable title using the slug.
  const readableTitle = params.slug.replace(/-/g, " ");

  return (
    <>
      <title>{readableTitle}</title>
      <meta name="description" content={`Details about ${readableTitle}`} />
    </>
  );
}