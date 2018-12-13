import React,{Component} from 'react'
import Menubar from '../components/Menubar'
import Card from '../components/Card'
import Header from '../components/Header'
import '../css/Login.css'
import {Link} from 'react-router-dom'
class Login extends Component{

    constructor(props){
        super(props);
        this.register = this.register.bind(this);
    }

    register(){

    }

    render(){
        return(

            <div className="signin">
                <Header></Header>
                <Menubar></Menubar>
                
                <div className="content">

                    <div className="myform">
                        <form className="ui form">
                        
                        
                        
                            <div className="field">
                                <label>Username</label>
                                
                                <div className="ui fluid input">
                                    <input type="text"/>
                                </div>
                            </div>
                            
                            <div className="field">
                                <label>Password</label>
                                
                                <div className="ui fluid input">
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="equal width fields" >
                                <div className="field" style={{marginTop : '1%',marginBottom : '5%', width : '100px'}}>
                                    <button onClick={this.register} className="ui inverted blue button" style={{width : '90px', padding : '0 !important'}}>Login</button>
                                    
                                </div>
                                
                            </div>
                            
                            <div style={{borderBottomStyle : 'solid', borderWidth : '1px'}}></div>
                            <p style={{fontSize : '1vw', marginTop : '7.5%'}}>Not a Member?</p>
                            <div className="field" style={{marginTop : '7.5%', width : '100px' ,padding : '0 !important'}}>
                                    <Link to="/register"><button className="ui inverted pink button" style={{width : '90px'}}>Sign Up</button></Link>                                   
                                </div>
                        
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;