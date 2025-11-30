import { NextResponse } from 'next/server'
import { addSubscriber, getSubscriberCount } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json()
    if (!email || !email.includes('@')) return NextResponse.json({ error: 'Valid email required' }, { status: 400 })

    const id = addSubscriber(email, name || '')
    const count = getSubscriberCount()
    return NextResponse.json({ success: true, id, count, message: 'Successfully subscribed' })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
