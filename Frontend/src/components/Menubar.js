import React,{Component} from 'react'
import '../css/Menubar.css'
import { createBrowserHistory } from 'history';
import {Link} from 'react-router-dom'
const history = createBrowserHistory();

class Menubar extends Component{

    constructor(props){
        super(props);
        this.state = {isLogined : false};
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
        )
    }
}

export default Menubar