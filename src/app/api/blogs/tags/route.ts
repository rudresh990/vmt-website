import { NextResponse } from 'next/server';
import { getTags } from '@/app/lib/db/tag/tagsMethods';

export async function GET() {
  const tags = await getTags({ status: 'APPROVED' }); //this is a function with optional arguments { status: 'APPROVED' } no args means get all
  if (!tags) {
    return NextResponse.json({ error: 'Tags not found.' }, { status: 404 });
  }
  return NextResponse.json(tags);
}
