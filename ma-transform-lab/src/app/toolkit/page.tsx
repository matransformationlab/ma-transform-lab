import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function Toolkit() {
  return (
    <Section>
      <h1 className="text-5xl font-bold text-white text-center mb-8">Wellness Toolkit</h1>
      <Card>
        <p className="text-xl text-[#D1D5DB] text-center mb-6">Essential resources for metabolic health and mental clarity.</p>
        <div className="text-center">
          <Button variant="secondary">Access Toolkit</Button>
        </div>
      </Card>
    </Section>
  )
}
