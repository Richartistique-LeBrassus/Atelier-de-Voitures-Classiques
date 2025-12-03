export default async function Head({ params }: { params: { slug: string } }) {
  // load your car data however your project does it
  const res = await fetch(`http://localhost:3000/api/cars/${params.slug}`, {
    cache: "no-store",
  });
  const demo = await res.json();

  return (
    <>
      <title>{demo.title}</title>
      <meta name="description" content={demo.description?.slice(0, 150)} />
    </>
  );
}