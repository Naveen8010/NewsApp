
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
            <Route exact path='/General' element={<News setProgress= {setProgress} key="General" pageSize={pageSize} country="in" category="General" />} />
            <Route exact path='/Business' element={<News setProgress= {setProgress} key="Buisness"pageSize={pageSize} country="in" category="Business" />} />
            <Route exact path='/Entertainment' element={<News setProgress= {setProgress} key="Entertainment"pageSize={pageSize} country="in" category="Entertainment" />} />
            <Route exact path='/Sports' element={<News setProgress= {setProgress} key="Sports"pageSize={pageSize} country="in" category="Sports" />} />
            <Route exact path='/Health' element={<News setProgress= {setProgress} key="Health"pageSize={pageSize} country="in" category="Health" />} />
            <Route exact path='/Technology' element={<News setProgress= {setProgress} key="Technology" pageSize={pageSize} country="in" category="Technology" />} />
            <Route exact path='/Science' element={<News setProgress= {setProgress} key="Science" pageSize={pageSize} country="in" category="Science" />} />
          </Routes>
        
          
      </div>
      </Router>
    )
  
}
export default App

