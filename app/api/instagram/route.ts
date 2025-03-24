import { NextResponse } from "next/server";

const ACCESS_TOKEN = process.env.VERIFY_TOKEN;
const INSTAGRAM_API_URL = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`;

export async function GET() {
  try {
    const response = await fetch(INSTAGRAM_API_URL);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Gagal mengambil data");
    }
    const formattedData = data.data.map((post: any) => {
      let imageUrl = post.media_url; // Default ke media_url

      if (post.media_type === "VIDEO") {
        imageUrl = post.thumbnail_url || post.media_url; // Gunakan thumbnail jika ada
      } else if (post.media_type === "CAROUSEL_ALBUM" && post.children?.data.length > 0) {
        imageUrl = post.children.data[0].media_url; // Ambil gambar pertama jika carousel
      }

      return {
        id: post.id,
        caption: post.caption || "",
        media_type: post.media_type,
        media_url: imageUrl,
        permalink: post.permalink,
        timestamp: post.timestamp,
      };
    });


    console.log("Formatted Data:", formattedData);
    return NextResponse.json({ data: formattedData });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
