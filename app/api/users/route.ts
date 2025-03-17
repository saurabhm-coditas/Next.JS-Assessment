import { NextResponse } from 'next/server';

// Mock data - you can replace this with your actual data source
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

export async function GET() {
  return NextResponse.json(users);
} 