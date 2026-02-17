export async function POST(req) {
  const { url } = await req.json();

  const key = process.env.INDEXNOW_KEY;
  const endpoint = "https://api.indexnow.org/indexnow";

  const body = {
    host: "voidmatrixtech.com",
    key: key,
    urlList: [url],
  };

  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return Response.json({ success: true });
}
