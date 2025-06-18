import { NextResponse } from "next/server";
const StudentData = [
  {
    id: 1,
    name: "Su Su",
    age: 17,
    address: "Hledan",
    major: "Computer Science",
  },
];
export async function GET() {
  return NextResponse.json(StudentData);
}

export async function POST(req) {
  const body = await req.json();
  console.log(body)
  return NextResponse.json({ message: "Student is successfully created.",
    bodyData:body,
   });
}
