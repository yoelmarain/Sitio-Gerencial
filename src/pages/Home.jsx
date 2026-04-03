import Hero from '../components/Hero'
import PresentacionVideo from '../components/PresentacionVideo'
import TeamSection from '../components/TeamSection'
import MapasConceptualesSection from '../components/MapasConceptualesSection'
import RutasAprendizajeSection from '../components/RutasAprendizajeSection'

export default function Home() {
  return (
    <>
      <Hero />
      <TeamSection />
      <PresentacionVideo />
      <RutasAprendizajeSection />
      <MapasConceptualesSection />
    </>
  )
}
