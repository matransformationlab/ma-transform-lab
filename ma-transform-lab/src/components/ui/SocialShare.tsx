'use client'

import { useState, useEffect } from 'react'
import { Copy, Check, Twitter, Facebook, Linkedin, Mail } from 'lucide-react'

interface SocialShareProps {
  url?: string
  text?: string
  hashtags?: string[]
}

export default function SocialShare({ 
  url = '',
  text = 'Join me at MA Transform Lab - Transforming lives across mental, physical, business, and AI dimensions',
  hashtags = ['matransformlab', 'transformation', 'growth']
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const shareUrl = mounted ? window.location.href : url
  const shareText = `${text} @matransformlab`

  const platforms = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=${hashtags.join(',')}`
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent('Join me at MA Transform Lab')}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`
    }
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText + '\n\n' + shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!mounted) return null

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-[#1A1A1A] border border-[#374151] rounded-xl">
      <span className="text-sm font-medium text-[#D1D5DB]">Share your journey:</span>
      <div className="flex gap-2">
        {platforms.map((platform) => {
          const Icon = platform.icon
          return (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0F0F0F] hover:bg-[#7C3AED] transition-colors"
              title={`Share on ${platform.name}`}
            >
              <Icon className="w-4 h-4 text-[#D1D5DB] hover:text-white" />
            </a>
          )
        })}
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-[#0F0F0F] hover:bg-[#10B981] transition-colors"
          title="Copy link"
        >
          {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-[#D1D5DB]" />}
        </button>
      </div>
      <span className="text-xs text-[#9CA3AF]">@matransformlab</span>
    </div>
  )
}
