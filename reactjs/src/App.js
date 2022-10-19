import {Route, Routes} from 'react-router-dom'
import Deepak from './components/Deepak'
import Ram from './components/Ram'
import Sandeep from './components/Sandeep'
import Header from './components/Header'
import Mahesh from './components/Mahesh'
import Akhil from './components/Akhil'
import Srinu from './components/Srinu'


const App =() => (
  <>
  <Header />
   <Routes>
  <Route exact path="/" element={<Deepak />} />
  <Route exact path="/mahesh" element={<Mahesh />} />
  <Route exact path="/akhil" element={<Akhil />} />
  <Route exact path="/sandeep" element={<Sandeep />} />
  <Route exact path="/ram" element={<Ram />} />
  <Route exact path="/srinu" element={<Srinu />} />
  
 
  </Routes> 
  </>
)
export default App