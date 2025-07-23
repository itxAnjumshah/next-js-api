import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const data = await req.formData();
  const file = data.get('file');

  if (!file) {
    return NextResponse.json({ message: "No image found", success: false });
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);

  const path = `./public/${file.name}`;
  
  try {
    await writeFile(path, buffer);
    return NextResponse.json({ message: "File uploaded", success: true });
  } catch (error) {
    return NextResponse.json({ message: "Error uploading file", success: false, error: error.message });
  }
}
