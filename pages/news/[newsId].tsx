import { useRouter } from "next/router";

export function DetailPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  return <h1>This is the detailed page</h1>;
}
export default DetailPage;
