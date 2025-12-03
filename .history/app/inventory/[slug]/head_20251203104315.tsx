export default function Head({ params }: { params: { slug: string } }) {

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