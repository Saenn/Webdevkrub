import React,{Component} from 'react'
import Menubar from '../components/Menubar'
import Header from '../components/Header'
import '../css/Login.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {announceCard} from '../actions/index'
import swal from 'sweetalert'

class Announce extends Component{

    constructor(props){
        super(props);
        this.state = {card : {
            company : '',
            type : '',
            area : '',
            description : ''
        }}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);        
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onAreaChange = this.onAreaChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault();
        const com = this.state.card.company.length > 0;
        const typ = this.state.card.type.length > 0;
        const are = this.state.card.area.length > 0;
        const las = this.state.card.description.length > 0;
        if(com && typ && are && las){
            await this.props.announceCard(this.state.card);
            if(this.props.message.length > 0){
                swal("Announced Successfully","","success")
            }
            this.setState({card : {
                company : '',
                type : '',
                area : '',
                description : ''
            }})
        }
        else{
            swal("Please fill up this form","","error")
        }
        
    }

    onCompanyChange(e){
        const val = e.target.value;
        this.setState(prevState => (
            {card : {...prevState.card,['company'] : val}})
        )        
    }

    onTypeChange(e){
        const val = e.target.value;
        this.setState(prevState => (
            {card : {...prevState.card,['type'] : val}})
        )
    }

    onAreaChange(e){
        const val = e.target.value;
        this.setState(prevState => (
            {card : {...prevState.card,['area'] : val}})
        )
    }

    onTextChange(e){
        const val = e.target.value;
        this.setState(prevState => (
            {card : {...prevState.card,['description'] : val}})
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
                                    <input type="text" value={this.state.card.company} onChange={this.onCompanyChange}/>
                                </div>
                            </div>
                            
                            <div className="field">
                                <label>Type</label>
                                
                                <div className="ui fluid input">
                                    <input type="text" value={this.state.card.type} onChange={this.onTypeChange}/>
                                </div>
                            </div>
                            
                            <div className="field">
                                <label>Area</label>
                                
                                <div className="ui fluid input">
                                    <input type="text" value={this.state.card.area} onChange={this.onAreaChange}/>
                                </div>
                            </div>
                        
                        </form>

                        
                         
                    </div>

                    <div className="myformarea">

                        <form className="ui form">

                            <div className="field">
                                <label>Description</label>
                                <textarea rows="9" value={this.state.card.description} onChange={this.onTextChange}></textarea>
                            </div>

                            <div className="equal width fields" style={{position : 'relative',float : 'right', marginTop : '5%'}}>
                                    <div className="field" style={{marginTop : '1%',marginBottom : '5%', width : '100px'}}>
                                        <button onClick={this.handleSubmit} className="ui inverted green button" style={{width : '90px', padding : '0 !important'}}>Submit</button>
                                        
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
    return bindActionCreators({announceCard }, dispatch);
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Announce);