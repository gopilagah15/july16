import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [] ;
   constructor(){
    super();
    console.log('constructor from News Component');
    this.state={
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount(){
    // let url = 'https://newsapi.org/v2/top-headlines?apiKey=062e8aeb3bd546a88e918d2ec4555139&q=cricket';
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=062e8aeb3bd546a88e918d2ec4555139';
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className='container my-3'> 
        <h2>NewsMonkey- Top HeadLines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-6" key= {element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}/>
            </div>
            })}
        
       
        </div>

      </div>
    )
  }
}

export default News
