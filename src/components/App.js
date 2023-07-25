import Logo from './Logo'
import Header from './Header'
import LeftPanel from './LeftPanel'

function App() {
  return (
    <div className="page">
      <Logo />
      <Header />
      <div className="fixed-panels">
        <LeftPanel />
      </div>
    </div>
  )
}

export default App
