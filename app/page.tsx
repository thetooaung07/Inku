import PostPreview from "./posts/components/PostPreview";
import getPostMetadata from "./posts/components/getPostMetadata";

export default async function Home() {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post, index) => (
    <PostPreview {...post} key={index}></PostPreview>
  ));

  return (
    <main className="App">
      <div>{postPreviews}</div>
    </main>
  );
}
