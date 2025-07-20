// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





// import './App.css'

// function App(){

//   return(
//     <>
//       <div>
//         <p>Hello World</p>
//       </div>
//       <Text />
//     </>
//   );
// }

// function Text(){
//   return(
//     <div>
//       <p>Hello World</p>
//     </div>
//   );
// }
// export default App





// import './App.css'

// function App(){
//   return(
//     <>
//       <Text display="Hi there"/>
//       <Text display="Practice REACT with me..."></Text>
//     </>
//   )
// }

// function Text({display}){
//   return(
//     <div>
//       <p>{display}</p>
//     </div>
//   )
// }

// export default App





// import './App.css'
// import MovieCard from './components/MovieCard'

// function App(){
//   return(
//     <>
//       <MovieCard movie={{title:"Black" , release_date: 2022}}/>
//       <MovieCard movie={{title:"Blacked" , release_date: 2024}}/>
//     </>
//   )
// }

// export default App





// import './App.css'
// import MovieCard from './components/MovieCard'

// function App(){

//   const movienumber=1;

//   return(
//     <>
//       {movienumber===1 ? (<MovieCard movie={{title:"Black" , release_date: 2022}}/>) : (<MovieCard movie={{title:"Blacked" , release_date: 2024}}/>)}
//     </>
//   )
// }

// export default App




// import './App.css'
// import MovieCard from './components/MovieCard'

// function App(){

//   const movienumber=1;

//   return(
//     <>
//       {movienumber===1 && <MovieCard movie={{title:"Black" , release_date: 2022}}/>}
//     </>
//   )
// }

// export default App



// import './App.css'
// import Home from './pages/Home'

// function App(){
//   return(
//     <>
//       <Home />
//     </>
//   )
// }

// export default App




// import './css/App.css'
// import Favorites from './pages/Favorites'
// import Home from './pages/Home'
// import {Routes, Route} from 'react-router-dom'
// import NavBar from './components/NavBar'

// function App(){
//   return(
//     <div>
//       <NavBar />    
//       <main className='main-content'>
//         <Routes>
//           <Route path='/' element={<Home />}/>
//           <Route path='/favorites' element={<Favorites />}/>
//         </Routes>
//       </main>
//     </div>
//   )
// }

// export default App




import './css/App.css'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App(){
  return(
    <MovieProvider>
      <NavBar />    
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App