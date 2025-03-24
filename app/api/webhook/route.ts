import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "default_token"; // Ambil dari .env

export async function GET(req: NextRequest) {
    // Ambil token dari header request
    const token = req.headers.get("x-verify-token");

    console.log("Received Token:", token);  // Debugging

    if (token === VERIFY_TOKEN) {
        console.log("✅ Webhook Verified!");
        return new Response("Webhook Verified", { status: 200 });
    }

    return NextResponse.json({ error: "Verification failed!" }, { status: 403 });
}
