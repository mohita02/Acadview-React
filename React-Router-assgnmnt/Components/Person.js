import React, { Component } from 'react';
import Info from './Info';
import AddInfo from './AddInfo';

class Person extends Component {
  state ={
      infos: [
      { name: 'Palsheeta', birthday:'24 May 1998', aboutMe:'I like Drawing and sketching', id: 1 },
      { name: 'Mayank', birthday:'10 August 1997', aboutMe:'I love to play volleyBall', id: 2 },
      { name: 'Mohita', birthday:'28 January 1997', aboutMe:'I love reading novels', id: 3 },
     { name: 'Navya', birthday:'3 September 2000', aboutMe:'I love playing chess', id: 4 },
    { name: 'Arnav', birthday:'23 January 2001', aboutMe:'I love playing Football', id: 5 }
    ]
  }
  deleteInfo = (id)=>{
      //console.log(id);
      let infos = this.state.infos.filter(info=>{
          return info.id!==id;
      })
      console.log('After Deleting',infos);
      this.setState({
          infos
      })
  }
  addInfo = (info) => {
    console.log('Inside App Component', info);
    info.id = Math.floor(Math.random() * 10);
    console.log(info.id);
    let infos = [...this.state.infos, info];
    this.setState({
      infos
    })
  }
  componentDidMount(){
      console.log('Component has been mounted');
  }
componentDidUpdate(prevProps, prevState){
    console.log("Component updated");
    console.log(prevProps, prevState);
}
  render(){
      return (
        <div className="App container">
          <h4 className="center a">Information of People</h4><br />
          <Info infos={this.state.infos} deleteInfo={this.deleteInfo}/><br />
          <h5 className="a">Want To Add New Person's Details???</h5><br/>
          <AddInfo addInfo={this.addInfo} />
        </div>
      );
  }
}

export default Person;
// ... spread operator to create a copy