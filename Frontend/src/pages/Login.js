import React,{Component} from 'react'
import Menubar from '../components/Menubar'
import Card from '../components/Card'
import Header from '../components/Header'
import '../css/Login.css'
import {Link} from 'react-router-dom'
import {login} from '../actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Login extends Component{

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        console.log(this.props.isLoggedIn)
        this.props.login()
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
                                    <input type="password" />
                                </div>
                            </div>

                            <div className="equal width fields" >
                                <div className="field" style={{marginTop : '1%',marginBottom : '5%', width : '100px'}}>
                                    <Link to="/"><button onClick={this.login} className="ui inverted blue button" style={{width : '90px', padding : '0 !important'}}>Login</button></Link> 
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

function mapStateToProps(state){
    return {
        isLoggedIn: state.isLoggedIn
      }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({login}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);