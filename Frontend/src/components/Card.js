import React,{Component} from 'react'
import '../css/Card.css'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class Card extends Component{

    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div className="card">

                <div className="leftsidecard">

                    <div style={{position : 'absolute', height : '40%', width : '100%', display : 'flex',
                alignItems : 'center', paddingLeft : '10%', fontSize : '2.5vw'}}>
                        {this.props.company}
                    </div>

                    <div style={{position : 'absolute', height : '30%', width : '100%' , top : '35%',
                display : 'flex', alignItems : 'center', paddingLeft : '15%', fontSize : '1.5vw'}}>
                        {'Area : ' + this.props.area}
                    </div>

                    <div style={{position : 'absolute', height : '30%', width : '100%', top : '65%',
                    display : 'flex', alignItems : 'center', paddingLeft : '15%', fontSize : '1.5vw'}}>
                        {'Type : ' + this.props.type}
                    </div>

                </div>

                <div className="rightsidecard">

                    <div className="ui disabled textarea bbbb">
                        <textarea disabled value={this.props.des} className="disabled" style={{borderStyle : 'none',backgroundColor : 'white'}}></textarea>
                    </div>                 

                </div>

            </div>
        )
    }
}

export default Card;