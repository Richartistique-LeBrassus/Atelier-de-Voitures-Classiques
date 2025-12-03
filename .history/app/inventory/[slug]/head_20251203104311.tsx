export default function Head({ params }: { params: { slug: string } }) {
  // You manually define the title exactly how you do inside the page.
  // Example:
  const title = params.slug.replace(/-/g, " ");

  return (
    <>
      <title>{title}</title>
      <meta
        name="description"
        content={`Details for ${title}`}
      />
    </>
  );
}