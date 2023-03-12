import { Public } from "./App/Public"
import { Private } from "./App/Private"

function App() {
  const token=localStorage.getItem("token")
  if(token){
    return (
      <>
  <Private/>
      </>
    )
  }
return(
  <>
  <Public/>
  </>
)
}
export default App

