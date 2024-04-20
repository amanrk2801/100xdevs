import { NextRequest, NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    email: "aman@gmail.com",
    name: "aman",
  });
}

export async function POST(request: NextRequest) {
  // body
  const body = await request.json();
  console.log(body);
  // header
  console.log(request.headers.get("authorization"));
  // query parameters
  console.log(request.nextUrl.searchParams.get("name"));

  // hit the database with username, password
  return NextResponse.json({
    message: "You are signed up",
  });
}
