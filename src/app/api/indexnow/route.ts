import { NextResponse } from "next/server";

const KEY = process.env.INDEXNOW_KEY!;

export async function POST(req: Request) {
  const { urls } = await req.json();

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      host: "voidmatrixtech.com",
      key: KEY,
      urlList: urls,
    }),
  });

  return NextResponse.json({
    success: response.ok,
  });
}