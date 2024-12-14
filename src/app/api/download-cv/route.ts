import { NextResponse } from "next/server";

export async function GET() {
  const cvUrl = "https://drive.google.com/file/d/13TRYjjhfuGwVembuCQBiASF1ffHCCkf8/view?usp=drive_link"; // Replace with your actual Google Drive File ID
  return NextResponse.redirect(cvUrl);
}