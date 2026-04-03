import teamMembers from '../data/teamMembers'
import TeamMemberCard from './TeamMemberCard'

export default function TeamSection() {
  return (
    <main className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
      <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 sketch-border">
        <section className="mb-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-black mb-4">
              El Equipo
            </h2>
            <div className="h-1 w-32 bg-black mx-auto mb-8" />
            <p className="text-black/70 text-lg">&nbsp;</p>
          </div>

          <div className="space-y-24">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
