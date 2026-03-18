import { NextResponse } from 'next/server';
import { getCategories } from '@/app/lib/db/category/categoryMethods';

export async function GET() {
  const categories = await getCategories({ status: 'APPROVED' }); //this can run without parameters also
  if (!categories) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }
  return NextResponse.json(categories);
}
