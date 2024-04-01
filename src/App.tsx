import Header from "./components/Header/Header.tsx";
import Main from "./pages/Main.tsx";

function App() {
  return (
    <>
        <Header></Header>
        <div className='container'>
            <Main></Main>
        </div>
    </>
  )
}

export default App
