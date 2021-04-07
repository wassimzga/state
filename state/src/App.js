
import './App.css';
import React,{Component} from 'react'
import wassimphoto from './photowassim.jpg'
import Profil from './Profil'

class App extends Component {
  
  state = {
    Person : {
      fullName:'Bouzgarrou Med Wassim',
      bio:'Business Developement',
      imgSrc:<img src={wassimphoto}></img>,
      profession:'business developement',
    },
         show : false,


  };
  handleShowPerson = ()=> {
    this.setState(
      {...this.state,show:!this.state.show}
    )
  };

  

  render(){


return(
  <div className='centre'>
  {this.state.show && (
    <div>
    <Profil/>
    
    <h1> {this.state.Person.fullName}</h1>
    <h1>{this.state.Person.bio}</h1>
    <h1>{this.state.Person.imgSrc}</h1>
    <h1>{this.state.Person.profession}</h1>
    
    </div>
  )}
  

<button className='btn' onClick ={this.handleShowPerson}>hide/show </button>
  </div>
)
  }
} 

  


export default App;
