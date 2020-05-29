import React, { Component } from "react";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', userName:'',getArray:[]};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getDate = this.getDate.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      
      handleChangeUser(event) {
        this.setState({userName: event.target.value});
      }
      // handleSubmit(event) {
      //   // alert('A name was submitted: ' + this.state.value);
      //   console.log("comment value" + this.state.value)
      //   event.preventDefault();
      // }
      
      handleSubmit (event) {
        //alert('A list was submitted: ' + this.state.formvalue);
        event.preventDefault();
        // fetch('http://127.0.0.1:8000/post/', {
        //   method: 'POST',
        //   crossDomain:true,
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
            
        //     'Access-Control-Allow-Origin':'*'
        //   },
        //   'mode': 'cors',
          
        //   body: JSON.stringify({
        //     name: 'mohan',
        //     comment: this.state.value,
        //     upVote: 15,
        //     downVote: 7
        //   })
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err)

      

      const user = {
        name: this.state.userName,
            comment: this.state.value,
            upVote: 0,
            downVote: 0
      };
      axios.post(`http://127.0.0.1:8000/post/`, user )
      .then(res => {
        console.log("posted comment", res);
        if(res.status === 201){
          this.getDate()
        }
      })
      .catch(error=>{
        console.log("error is  ",error);
      })
      
      }
  
      getDate()
      {
          fetch('http://127.0.0.1:8000/post/')
      .then(response => response.json()
        
        )
        // var temp = [];
      .then(data =>
        
         {
              // data.map((a)  =>{
          // temp.push(a[i].name)
            // console.log("response data",a.name)
            data.map((a,i)=>{
              this.setState({getArray:[...this.state.getArray,data[i]]})
            })
            
            console.log("get array data ", this.state.getArray)
            // return a
        //  temp.push(data)
       })
          // console.log("response data",data[0])
         }
        //  );
        //  console.log("get array data in render", temp)
        //  this.setState({getArray:this.state.getArray.concat(a)})
      // }

     
      render() {
      // console.log("get array data in render", this.state.getArray)
      const imageClick = (index) => {
        console.log('Clickimages index',index);
      } 


      const renderData =   this.state.getArray.map((item,index) => 
        (
          <div>
                
              <h4>
              {index+1}  <span></span>
              Name :{item.name}
                </h4>
             
              <h5>
              Comment: {item.comment}
              </h5>       
              
              <img src={require('./like.png')} onClick={() => imageClick(index) } width="30" height="30"/>
              {item.upVote}
              
             
              <img src={require('./dislike.png')}  width="30" height="30"/>
              {item.downVote}
              
           </div>
         
        )
        
         )
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
             User Name:
              <input type="text"  value={this.state.userName} onChange={this.handleChangeUser} />
            </label><br/>
            <label>
              Comment:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label><br/>
            <input type="submit" value="Post Comment" />
          </form>
          {renderData}
         
          

       
    </div>
          
        );
      }
  }
  
  export default App;
  

  