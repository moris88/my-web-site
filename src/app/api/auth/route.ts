import { NextResponse } from "next/server";
import { login } from "@/lib/supabase/supabase";

const { error } = console;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = body.username || null;
    const password = body.password || null;
    // check username and password
    if (!username || !password) {
      return NextResponse.json(
        { error: "username and password are required" },
        { status: 404 }
      );
    }
    // check username and password
    const formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);
    const response = await login(formData);
    if (response?.error) {
      return NextResponse.json(
        { error: response.error.message },
        { status: 404 }
      );
    }

    // return response
    return NextResponse.json({ status: 200 });
  } catch (err) {
    error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
