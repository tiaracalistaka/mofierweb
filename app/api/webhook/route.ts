import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get("hub.mode");
    const token = searchParams.get("hub.verify_token");
    const challenge = searchParams.get("hub.challenge");

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
        console.log("✅ Webhook Verified!");
        return new Response(challenge, { status: 200 });
    }

    return NextResponse.json({ error: "Verification failed!" }, { status: 403 });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log("📩 Webhook Data:", JSON.stringify(body, null, 2));
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("❌ Error processing webhook:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
