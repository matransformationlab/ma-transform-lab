import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function Guide() {
  return (
    <Section>
      <h1 className="text-5xl font-bold text-white text-center mb-8">Free Transformation Guide</h1>
      <Card>
        <p className="text-xl text-[#D1D5DB] text-center mb-6">Download your 7-day transformation framework.</p>
        <div className="text-center">
          <Button variant="secondary">Download Guide</Button>
        </div>
      </Card>
    </Section>
  )
}
