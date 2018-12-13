import React,{Component} from 'react'
import Menubar from '../components/Menubar'
import Card from '../components/Card'
import Header from '../components/Header'
import '../css/Login.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createMember,announceCard} from '../actions/index'
import swal from 'sweetalert'

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {member : {
            username : '',
            password : '',
            company : '',
            email : ''
        }}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);        
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault();
        await this.props.createMember(this.state.member);
        const isValid = this.props.message[0].message != 'Already have this username'
        if(!isValid){swal(this.props.message[0].message,"","error")}
        else if(this.props.message[0].message.length > 0){
            swal("Registered Successfully","","success");
            this.setState({member : {
                username : '',
                password : '',
                company : '',
                email : ''
            }})
        }                
        else{
            swal("Please fill up this form","","error");
        }
    }

    onCompanyChange(e){
        const val = e.target.value;
        this.setState(prevState => (
            {member : {...prevState.member,['company'] : val}})
        )        
    }

    onUsernameChange(e){
        const val = e.target.value;
        this.setState(prevState => (
            {member : {...prevState.member,['username'] : val}})
        )
    }

    onPasswordChange(e){
        const val = e.target.value;
        this.setState(prevState => (
            {member : {...prevState.member,['password'] : val}})
        )
    }

    onEmailChange(e){
        const val = e.target.value;
        this.setState(prevState => (
            {member : {...prevState.member,['email'] : val}})
        )
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
                                <label>Your Company Name</label>
                                
                                <div className="ui fluid input">
                                    <input type="text" value={this.state.member.company} onChange={this.onCompanyChange}/>
                                </div>
                            </div>
                            
                            <div className="field">
                                <label>Username</label>
                                
                                <div className="ui fluid input">
                                    <input type="text" value={this.state.member.username} onChange={this.onUsernameChange}/>
                                </div>
                            </div>
                            
                            <div className="field">
                                <label>Password</label>
                                
                                <div className="ui fluid input">
                                    <input type="password" value={this.state.member.password} onChange={this.onPasswordChange}/>
                                </div>
                            </div>

                            <div className="field">
                                <label>Email</label>
                                
                                <div className="ui fluid input">
                                    <input type="text" value={this.state.member.email} onChange={this.onEmailChange}/>
                                </div>
                            </div>

                            <div className="equal width fields" >
                                <div className="field" style={{marginTop : '1%',marginBottom : '5%', width : '100px'}}>
                                    <button onClick={this.handleSubmit} className="ui inverted pink button" style={{width : '90px', padding : '0 !important'}}>Sign Up</button>
                                    
                                </div>
                                
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
        message: state.message
      }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createMember,announceCard }, dispatch);
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Register);