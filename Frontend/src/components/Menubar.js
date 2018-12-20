import React,{Component} from 'react'
import '../css/Menubar.css'
import { createBrowserHistory } from 'history';
import {Link} from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {login} from '../actions/index'
const history = createBrowserHistory();

class Menubar extends Component{
    constructor(props){
        super(props);
        this.toHome = this.toHome.bind(this);
        this.toSign = this.toSign.bind(this);
        this.toAnnounce = this.toAnnounce.bind(this);
    }

    toHome(){
        history.push('/');
    }

    toSign(){
        history.push('/signin');
    }

    toAnnounce(){
        history.push('/announce');
    }

    render(){
        return(
            <div className="menubar">

                <div className="ui icon input" style={{padding : '7.5px'}}>                
                    <input type="text" placeholder="Search..."/>
                        <i aria-hidden="true" className="search icon"></i>                
                </div>

                <Link to="/"><div className="menu" >Home</div></Link>
                <Link to="/announce"><div className="menu" onClick={this.toAnnounce}>Announce</div></Link>
                <Link to="signin"><div className="menu" onClick={this.toSign}>{this.isLogined? 'Profile' : 'Sign in / Register'}</div></Link>               

            </div>
            // <div >
            //     {this.props.isLoggedIn ? (
            //         <div className="menubar">
            //             <div className="ui icon input" style={{padding : '7.5px'}}>                
            //             <input type="text" placeholder="Search..."/>
            //                 <i aria-hidden="true" className="search icon"></i>                
            //             </div>
            //             <Link to="/"><div className="menu" >Home</div></Link>
            //             <Link to="/announce"><div className="menu" onClick={this.toAnnounce}>Announce</div></Link>
            //             <Link to="/"><div className="menu" onclick={this.logout}>Log out</div></Link>
            //             {/* {console.log("menubar true", this.props.isLoggedIn)} */}
            //         </div>
            //     ) : (
            //         <div className="menubar">
            //             <div className="ui icon input" style={{padding : '7.5px'}}>                
            //             <input type="text" placeholder="Search..."/>
            //                 <i aria-hidden="true" className="search icon"></i>                
            //             </div>
            //             <Link to="/"><div className="menu" >Home</div></Link>
            //             <Link to="signin"><div className="menu" onClick={this.toSign}>{this.isLogined? 'Profile' : 'Sign in / Register'}</div></Link>
            //             {/* {console.log("menubar false", this.props.isLoggedIn)} */}
            //         </div>
            //     )}
                
            // </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Menubar);