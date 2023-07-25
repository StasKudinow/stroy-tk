import Logo from './Logo'
import Header from './Header'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

function App() {
  return (
    <div className="page">
      <Logo />
      <Header />
      <div className="fixed-panels">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  )
}

export default App
