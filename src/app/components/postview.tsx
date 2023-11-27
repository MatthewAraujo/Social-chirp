import dayjs from "dayjs";
import Link from "next/link";

import relativeTime from "dayjs/plugin/relativeTime";
import { Post } from "../interface/post";
dayjs.extend(relativeTime);

interface dataProps {
  userId: string;
}

async function getData({ userId }: dataProps) {
  const res = await fetch(`http://localhost:3333/user/${userId}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function PostView(props: Post) {
  const { content, createdAt, id, userId } = props;
  const author = await getData({ userId });

  if (!author) {
    return <div>Something went wrong</div>;
  }

  return (
    <div key={id} className="flex gap-3 border-b border-slate-400 p-4">
      <div>{author.user.name}</div>
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-300">
          <Link href={`/@${userId}`}></Link>
          <Link href={`/post/${id}`}>
            <span className="font-thin">{` · ${dayjs(
              createdAt
            ).fromNow()}`}</span>
          </Link>
        </div>
        <span className="text-2xl">{content}</span>
      </div>
    </div>
  );
}
