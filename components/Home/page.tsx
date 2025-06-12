import About from './About/page'
import Contact from './Contact/page'
import Hero from './Hero/page'
import Projects from './Project/page'
import Services from './Services/page'
import Skills from './Skills/page'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="skills"><Skills /></section>
      <section id="project"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

export default Home
