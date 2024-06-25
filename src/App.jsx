import './App.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header/Header'
import { ResumeCard } from '../components/ResumeCard/ResumeCard'
import { ForYou } from '../components/ForYou/ForYou'

function App() {

  return (
    <>
      <Header />
      <main>
        <ResumeCard />
        <ForYou />
        <Footer />

      </main>
    </>
  )
}

export default App
