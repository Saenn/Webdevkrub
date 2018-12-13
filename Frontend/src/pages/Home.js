import React,{Component} from 'react'
import Header from '../components/Header'
import '../css/Home.css'
import Menubar from '../components/Menubar'
import Card from '../components/Card'
import {fetchCard} from '../actions/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Home extends Component{ 

    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.renderAllCard = this.renderAllCard.bind(this);
    }

    async componentDidMount(){
        try{
            var fetch = await this.props.fetchCard();
        }
        catch (error){
            console.log("Error in Fetching All Cards",error);
        }
    }

    renderAllCard(){
        
        if(this.props.cards.length == 0){
            return <div></div>
        }
        else{
            console.log(this.props.cards)
            return this.props.cards[0].map((card,index) => <Card key={index} company={card.company}
            type={card.type} area={card.area} des={card.description}></Card>)
        }
    }

    render(){
        return(
            <div className="home">
                <Header></Header>   
                <Menubar></Menubar>  

                <div className="space"></div>
                <div className="allcard">                    
                    {this.renderAllCard()}
                   
                </div>

            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        cards : state.card
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCard }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
