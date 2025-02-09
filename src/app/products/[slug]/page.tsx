import ViewProduct from "@/components/ViewProduct";

async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  return <ViewProduct slug={slug} />;
}
export default ProductPage;
