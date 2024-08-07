import './App.css'
import Cards from './components/cards'

function App() {
// let myobj = {
//   username:"guhar", 
//   age: 21
// }

// let myarr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-red-500 p-4 rounded-xl mb-4'>tailwind css test</h1>

      {/* <Cards username="guhar heraan" someobj={myobj} otherobj={myarr}/> */}
      <Cards username="guhar" btnText="search me"/>
      <Cards username="heraan" btnText="view me"/>

    </>
  )
}

export default App
