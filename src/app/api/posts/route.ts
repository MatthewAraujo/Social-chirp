import { NextResponse } from "next/server";



export async function GET(req: Request, ) {
  const res = await fetch("http://localhost:3333/posts");

  console.log(res.body);
  return NextResponse.json({
    post: res.json(),
  })
}