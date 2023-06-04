import NavBar from "./components/ui/NavBar";
import PostPreview from "./posts/components/PostPreview";
import getPostMetadata from "./posts/components/getPostMetadata";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Home() {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post, index) => (
    <PostPreview {...post} key={index}></PostPreview>
  ));

  return (
    <main className="App">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {postPreviews}
      </div>
    </main>
  );
}
