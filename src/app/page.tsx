import { PostView } from "./components/postview";
import { Post } from "./interface/post";




async function getData() {
  const res = await fetch("http://localhost:3333/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Feed() {
  const data = await getData();

  if (!data) return <div>Something went wrong</div>;

  return (
    <div className="flex grow flex-col overflow-y-scroll">
      {data.post.map((post: Post) => (
        <PostView {...post} key={data.post.id} />
      ))}
    </div>
  );
}

export default async function Home() {
  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full  border-x border-slate-400 md:max-w-2xl">
        <h1>Posts</h1>
        <div>
          <div className="flex border-b border-slate-400 p-4" />

          <div>
            <Feed />
          </div>

          <div className="flex items-center justify-between p-4 text-xl">
            <a
              href="https://github.com/MatthewAraujo/Social-Chirp"
              target="_blank"
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div>Github</div>
              </div>
            </a>
            <span>
              <a href="https://patreon.com/t3dotgg">🐦 Chirp Blue</a>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
