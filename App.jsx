import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import AppRoutes from './routes'

function App() {

  return (
    <AppRoutes />
  )
}




function App() {


  return (
    <>
      <>
        <Header />
          <section className='container'>
            <div className='apresentacao'>
              <p>
                Olá, sou <br/>
              <span>Nicolas Henrique</span> <br/>
              aspirante a programador
              </p>
              <button className='btn btn-red'>
                Saiba mais sobre mim
              </button>
            </div>
            <figure>
              <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
            </figure>
          </section>

            <Footer />
      </>
    </>
  )
}

export default App
