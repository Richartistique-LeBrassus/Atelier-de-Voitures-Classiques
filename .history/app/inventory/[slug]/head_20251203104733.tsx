export default function Head({ params }: { params: { slug: string } }) {
  // You want the tab to show exactly what's in the slug 
  // e.g. db4-zagato
  const title = params.slug.toLowerCase();

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={`Details about ${title}`} />
    </>
  );
}
