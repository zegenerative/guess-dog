import React, { Component } from 'react';
import Game1Visualiser from './Game1Visualiser';
import { connect } from 'react-redux';
import { getRandomDog} from'../actions/game1Action';
import PropTypes from 'prop-types';

class Game1Container extends Component {
    constructor(){
        super();
        this.state = {
          breed: '',
          option1:'',
          option2:'',
          wrong : '',
          right : '',
          score : 0, 
          totalQuestions : 0,
          wrongAnswers:0        
        };
        this.onSelect = this.onSelect.bind(this);
      }
      onSubmit(e)
      {
        e.preventDefault();
        if (e.target.selected)
        {
            console.log(e.target.value);
        }
          
      }
      onSelect(selected)
      {
        this.setState({
            totalQuestions : this.state.totalQuestions+1
         });
         
         if(selected ===this.props.url.breed)
         {
            this.setState({
                score : this.state.score + 1
               });
               this.props.getRandomDog();
         }
         else{
            this.setState({
                wrong : "You choose the wrong answer",
                right : "Correct Answer Is : " + this.props.url.breed

               });
               setTimeout(
                function() {
                   
                    
                 
                    this.setState({ 
                        wrong : '',
                        right: '',
                        wrongAnswers: this.state.wrongAnswers + 1
                     });

                     this.props.getRandomDog();

                }
                .bind(this),
                3000
            );
         }
      
      
        
        
      }
    componentDidMount() {
       
        this.props.getRandomDog();
       
       
        }
    
   

    render() {
        console.log(this.props.url);
        console.log("random" + this.state.option1);
        if(this.props.url==null)
        {
            return <h1>check</h1>
        }else{
            return (
                <div>
                   {this.state.option1}
                    {this.state.option2}
                    <Game1Visualiser imgUrl={this.props.url.random} breed={this.props.url.breed} 
                    option1={this.props.url.option1}
                    option2={this.props.url.option2}    
                    select= {this.onSelect}
                    score={this.state.score}
                    wrong={this.state.wrong}
                    right={this.state.right}
                    wrongAnswers ={this.state.wrongAnswers}
                    total = {this.state.totalQuestions}
                    /> </div>
             )} }}

Game1Container.propTypes = {
    getRandomDog: PropTypes.func.isRequired,
    url: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = state => ({
    dogsList: state.game1.dogs,
    url : state.game1.random,});

  export default connect(mapStateToProps, { getRandomDog })(Game1Container);