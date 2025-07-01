import clientPromise from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const posts = await db.collection('comments').find({}).toArray();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching posts', error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db('your-db-name');
    const result = await db.collection('posts').insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: 'Error saving post', error }, { status: 500 });
  }
}
