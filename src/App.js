import Content from "./components/Content"
import Footer from "./components/Footer"
import Headers from "./components/Headers"

const App = () => {
  return (
   <>
   <header>
   <Headers/>
   </header>
   <section>
   <Content/>
   </section>
   <Footer>
   <Footer/>
   </Footer>
   </>
  )
}

export default App