import { NextResponse } from "next/server";
export async function PUT(req, { params }) {
  const studentId = params.id;
  const body = await req.json();
  return NextResponse.json({
    message: "Student is successfully updated.",
    studentId,
    bodyData: body,
  });
}

export async function DELETE(req, { params }) {
  const studentId = params.id;
  return NextResponse.json({
    message: "Student is successfully deleted.",
    studentId,
  });
}

export async function GET(req, { params }) {
  const studentId = params.id;
  const student = {
    id:studentId,
    name: "Su Su",
    age: 17,
    gender: "female",
    address: "Hledan",
    major: "Computer Science",
  };
  return NextResponse.json(student);
}
