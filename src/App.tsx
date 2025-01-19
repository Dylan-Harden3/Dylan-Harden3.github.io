import { useTheme } from 'next-themes'
import './App.css'
import Home from './components/Home'
import { Button } from './components/ui/button'
import WorkExperienceTimeline from './components/Experience'
import ProjectsList from './components/Projects'
import Footer from './components/Footer'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      size="icon"
      variant="outline"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <span>🌙</span> : <span>☀️</span>}
    </Button>
  )
}

function App() {
  return (
    <div className='bg-background text-foreground relative'>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Home />
      <WorkExperienceTimeline />
      <ProjectsList />
      <Footer />
    </div>
  )
}

export default App