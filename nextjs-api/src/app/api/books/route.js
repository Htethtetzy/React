import { NextResponse } from "next/server";
const BookData = [
  {
    id: 1,
    title: "The Great",
    author: "Scott",
    published_year: "1925",
  },
];
export async function GET() {
  return NextResponse.json({ BookData });
}
export async function POST(req) {
  const body = await req.json();
  return NextResponse.json({
    message: "Book is successfully created",
    BookData: body,
  });
}
