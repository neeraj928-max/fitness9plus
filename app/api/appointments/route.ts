import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, phone, email, program, goal, experience, notes } = body;

    if (!full_name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("appointments")
      .insert([
        {
          full_name,
          phone,
          email,
          program: program || "1:1 Personal Coaching",
          goal: goal || "General Fitness",
          experience: experience || "Beginner",
          notes: notes || "",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("API error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
