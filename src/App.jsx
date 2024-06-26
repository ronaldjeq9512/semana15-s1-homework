import './App.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header/Header'
import { ResumeCard } from '../components/ResumeCard/ResumeCard'
import { ForYou } from '../components/ForYou/ForYou'
import { Tour } from '../components/Tour/Tour'

function App() {

  return (
    <>
      <Header />
      <main>
        <ResumeCard />
        <ForYou />
        <Tour />
        <Footer />

      </main>
    </>
  )
}

export default App
