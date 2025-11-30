'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import ProgressBar from '@/components/ui/ProgressBar'
import Section from '@/components/ui/Section'
import SocialShare from '@/components/ui/SocialShare'
import { cn } from '@/lib/utils'
import { ArrowRight, CheckCircle } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "How would you rate your current mental clarity and focus?",
    options: [
      { value: 1, text: "Poor - Constantly distracted and foggy" },
      { value: 2, text: "Fair - Struggle to maintain focus" },
      { value: 3, text: "Good - Generally clear with occasional fog" },
      { value: 4, text: "Excellent - Sharp, focused, and clear-minded" }
    ]
  },
  {
    id: 2,
    question: "How satisfied are you with your current physical health and energy levels?",
    options: [
      { value: 1, text: "Very dissatisfied - fatigue and health issues" },
      { value: 2, text: "Dissatisfied - Low energy affecting daily life" },
      { value: 3, text: "Satisfied - Generally healthy with good energy" },
      { value: 4, text: "Very satisfied - Optimal health and abundant energy" }
    ]
  },
  {
    id: 3,
    question: "How would you rate your current business/career growth trajectory?",
    options: [
      { value: 1, text: "Stagnant - No growth, feeling stuck" },
      { value: 2, text: "Slow - Minimal progress, need acceleration" },
      { value: 3, text: "Steady - Consistent growth and opportunities" },
      { value: 4, text: "Rapid - Exponential growth and success" }
    ]
  },
  {
    id: 4,
    question: "How comfortable are you with leveraging AI and technology in your life/business?",
    options: [
      { value: 1, text: "Uncomfortable - AI feels overwhelming and scary" },
      { value: 2, text: "Cautious - Using basic tools but hesitant" },
      { value: 3, text: "Comfortable - Using AI regularly with good results" },
      { value: 4, text: "Advanced - AI is integrated into my daily operations" }
    ]
  }
]

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [saving, setSaving] = useState(false)

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  }

  const handleNext = async () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      await calculateAndSaveResults()
    }
  }

  const calculateAndSaveResults = async () => {
    setSaving(true)
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
    const maxScore = questions.length * 4
    const percentage = Math.round((totalScore / maxScore) * 100)
    
    setScore(percentage)
    setShowResults(true)

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, score: percentage }),
      })

      if (!response.ok) throw new Error('Failed to save assessment')
      console.log('Assessment saved successfully')
    } catch (error) {
      console.error('Failed to save assessment:', error)
    } finally {
      setSaving(false)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    return (
      <Section className="min-h-screen flex items-center justify-center">
        <Card className="max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            <CheckCircle className="w-16 h-16 text-[#10B981] mx-auto" />
            <h1 className="text-4xl font-bold text-white">Assessment Complete!</h1>
            <div className="mb-8">
              <div className="text-6xl font-bold gradient-text mb-2">{score}%</div>
              <p className="text-xl text-[#D1D5DB]">Your Transformation Readiness Score</p>
            </div>
            <ProgressBar value={score} showLabel />
            <div className="bg-[#1A1A1A] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What Your Score Means:</h3>
              <ul className="text-left space-y-3 text-[#D1D5DB]">
                {score >= 80 && <li className="flex items-center gap-2"><span className="text-2xl">🚀</span> Excellent! You're ready for rapid transformation</li>}
                {score >= 60 && score < 80 && <li className="flex items-center gap-2"><span className="text-2xl">📈</span> Good foundation! Focused effort will yield great results</li>}
                {score >= 40 && score < 60 && <li className="flex items-center gap-2"><span className="text-2xl">🎯</span> Fair start! Structured approach needed for breakthrough</li>}
                {score < 40 && <li className="flex items-center gap-2"><span className="text-2xl">💪</span> Opportunity! Significant transformation potential awaits</li>}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses"><Button size="lg">Start Your Transformation</Button></Link>
              <Link href="/"><Button size="lg" variant="outline">Back to Home</Button></Link>
            </div>
            <SocialShare text={`I scored ${score}% on my transformation readiness assessment! Join me at MA Transform Lab @matransformlab`} />
          </div>
        </Card>
      </Section>
    )
  }

  return (
    <Section className="min-h-screen flex items-center justify-center">
      <Card className="max-w-3xl mx-auto w-full">
        <div className="mb-8">
          <ProgressBar value={progress} showLabel />
        </div>

        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Question {currentQuestion + 1} of {questions.length}</h2>
            <p className="text-xl text-[#D1D5DB]">{questions[currentQuestion].question}</p>
          </div>

          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option) => (
              <label key={option.value} className={cn("flex items-center p-4 rounded-xl border cursor-pointer transition-all", "border-[#374151] bg-[#1A1A1A] hover:border-[#7C3AED] hover:bg-[#7C3AED]/5", answers[questions[currentQuestion].id] === option.value && "border-[#7C3AED] bg-[#7C3AED]/10")}>
                <input type="radio" name={`question-${questions[currentQuestion].id}`} value={option.value} checked={answers[questions[currentQuestion].id] === option.value} onChange={() => handleAnswer(option.value)} className="sr-only" />
                <div className={cn("w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center transition-all", answers[questions[currentQuestion].id] === option.value ? 'border-[#7C3AED] bg-[#7C3AED]' : 'border-[#374151]')}>
                  {answers[questions[currentQuestion].id] === option.value && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <span className="text-[#D1D5DB]">{option.text}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-[#9CA3AF]">{Object.keys(answers).length} of {questions.length} answered</div>
          <Button onClick={handleNext} disabled={!answers[questions[currentQuestion].id] || saving} size="lg">{currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next Question'}<ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>
      </Card>
    </Section>
  )
}
