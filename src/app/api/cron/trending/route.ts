import { updateTrendingScore } from '@/app/lib/blogAnalytics/updateTrending';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');

    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await updateTrendingScore();

    return NextResponse.json({
      updated: true,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        error: 'Cron failed',
      },
      { status: 500 },
    );
  }
}
