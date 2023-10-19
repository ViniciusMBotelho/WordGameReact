import Header from "./components/header"
import Content from "./components/content"
import Footer from "./components/footer"

import "./App.css"

const App = () => {
  return (
  <>
    <Header title="Qual é a palavra?"/>
    <Content/>
    <Footer mensagem="Copyright 2023 © Vinicius Macedo" link="http:\\www.github.com/ViniciusMBotelho"/>
  </>
  )
}

export default App