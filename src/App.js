
import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{BrowserRouter as Router,Route,Routes}from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const pageSize=6;
  
  const [progress, setProgress]=useState(0)

    return (
      <Router>
      
      <div>
        
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
     
          <Routes>
            
            <Route exact path='/' element={<News setProgress= {setProgress} key="General" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path='/General' element={<News setProgress= {setProgress} key="General" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path='/Business' element={<News setProgress= {setProgress} key="Business"pageSize={pageSize} country="us" category="business" />} />
            <Route exact path='/Entertainment' element={<News setProgress= {setProgress} key="Entertainment"pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path='/Sports' element={<News setProgress= {setProgress} key="Sports"pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path='/Health' element={<News setProgress= {setProgress} key="Health"pageSize={pageSize} country="us" category="health" />} />
            <Route exact path='/Technology' element={<News setProgress= {setProgress} key="Technology" pageSize={pageSize} country="us" category="technology" />} />
            <Route exact path='/Science' element={<News setProgress= {setProgress} key="Science" pageSize={pageSize} country="us" category="science" />} />
          </Routes>
        
          
      </div>
      </Router>
    )
  
}
export default App

