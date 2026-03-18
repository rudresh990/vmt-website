import { updateTrendingScore } from '@/app/lib/blogAnalytics/updateTrending';
export async function GET() {
  await updateTrendingScore();
  return Response.json({ updated: true });
}
