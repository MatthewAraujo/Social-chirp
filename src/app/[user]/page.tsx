import { PostView } from "@/components/postview";
import { Post } from "@/interface/post";

async function getData({ userId }: { userId: string }) {
  const res = await fetch(`http://localhost:3333/user/post/9f1662cf-7d75-4eb3-8c4e-7f770c3f3ab4`);

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// async function Feed({ userId }: { userId: string }) {
//   const data = await getData({ userId });
//   console.log(userId);

//   if (!data) return <div>Something went wrong</div>;

//   return (
//     <div className="flex grow flex-col overflow-y-scroll">
//       {data.post.map((post: Post) => (
//         <PostView {...post} key={data.post.id} />
//       ))}
//     </div>
//   );
// }

export default async function Page({ params }: { params: { user: string } }) {
  const data = await getData({ userId: params.user })

  return <div>My Post: {params.user}</div>;
}
