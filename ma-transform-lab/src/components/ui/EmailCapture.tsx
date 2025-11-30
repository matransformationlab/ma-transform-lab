'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import Button from './Button'

export default function EmailCapture({ variant = 'hero' }: { variant?: 'hero' | 'inline' }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })

      if (!response.ok) throw new Error('Failed to subscribe')

      setStatus('success')
      setMessage('Welcome to the transformation journey!')
      setEmail('')
      setName('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    } finally {
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#374151] text-[#D1D5DB] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]" required />
        <Button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</Button>
      </form>
    )
  }

  return (
    <div className="bg-[#1A1A1A] border border-[#374151] rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#7C3AED] flex items-center justify-center">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Join 1,000+ Transformers</h3>
          <p className="text-[#D1D5DB] text-sm">Get free resources, exclusive insights, and transformation strategies</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="px-4 py-3 rounded-lg bg-[#0F0F0F] border border-[#374151] text-[#D1D5DB] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]" />
          <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-3 rounded-lg bg-[#0F0F0F] border border-[#374151] text-[#D1D5DB] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]" required />
        </div>
        <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
          {status === 'loading' ? <><span className="animate-spin mr-2">⟳</span>Joining Transformation Journey...</> : status === 'success' ? '✅ Success! Check Your Email' : 'Start Your Transformation Today'}
        </Button>
      </form>

      {message && <div className={`mt-4 p-4 rounded-lg text-center ${status === 'success' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-red-500/20 text-red-400'}`}>{message}</div>}
      
      <div className="mt-6 pt-4 border-t border-[#374151] text-center">
        <p className="text-[#9CA3AF] text-sm">🔒 Your data is secure. No spam, ever. @matransformlab</p>
      </div>
    </div>
  )
}
