import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  published_year: yup.number().required("Published Year is required"),
});
export async function PUT(req, { params }) {
  try {
    const bookId = parseInt(params.id);
    const body = await req.json();
    const validatedData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });
    await prisma.book.update({
      where: { id: bookId },
      data: validatedData,
    });
    return NextResponse.json({
      message: "Book is successfully updated.",
      bookId,
      bodyData: body,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: error.inner.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        message: "Unexpected error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
//Delete Book ApI
export async function DELETE(req, { params }) {
  const bookId = parseInt(params.id);

  try {
    await prisma.book.delete({
      where: { id: bookId },
    });

    return NextResponse.json({
      message: "Book is successfully deleted.",
      bookId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Book not found or Book deletion is fail.",
      },
      {
        status: 404,
      }
    );
  }
}
//Get Book Detail API
export async function GET(req, { params }) {
  const bookId = parseInt(params.id);
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });
  return NextResponse.json(book);
}
