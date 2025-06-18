import { NextResponse } from "next/server";
export async function PUT(req, { params }) {
  const bookId = params.id;
  const body = await req.json();
  return NextResponse.json({
    message: "Book is successfully updated.",
    bookId,
    bodyData: body,
  });
}

export async function DELETE(req, { params }) {
  const bookId = params.id;
  return NextResponse.json({
    message: "Book is successfully deleted.",
    bookId,
  });
}

export async function GET(req, { params }) {
  const bookId = params.id;
  const book = {
    id: bookId,
     title: "The Great",
    author: "Scott",
    published_year: "1925",
  };
  return NextResponse.json(book);
}

