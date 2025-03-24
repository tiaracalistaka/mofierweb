import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "your_secure_token";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get("hub.mode");
    const token = searchParams.get("hub.verify_token");
    const challenge = searchParams.get("hub.challenge");

    console.log("✅ VERIFY_TOKEN dari .env:", VERIFY_TOKEN);
    console.log("🛑 Mode:", mode);
    console.log("🛑 Token yang diterima:", token);
    console.log("🛑 Challenge:", challenge);

    // Cek apakah mode dan token sesuai
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
        console.log("✅ Webhook Verified!");
        return NextResponse.json({ "hub.challenge": challenge }, { status: 200 });
    }

    console.log("❌ Token tidak cocok atau mode salah!");
    return NextResponse.json({ error: "Verification failed!" }, { status: 403 });
}
