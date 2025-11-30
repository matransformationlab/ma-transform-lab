import { NextResponse } from 'next/server'
import { saveAssessment } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { answers, score } = await request.json()
    if (!answers || typeof score !== 'number') return NextResponse.json({ error: 'Invalid data' }, { status: 400 })

    const id = saveAssessment(answers, score)
    return NextResponse.json({ success: true, id, message: 'Assessment saved' })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Failed to save assessment' }, { status: 500 })
  }
}
