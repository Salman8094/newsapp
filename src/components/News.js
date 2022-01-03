import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    // articles=[];
    
    static defaultProps={
        country:'in',
        category:'general',
    }
    constructor(){
          super();
          this.state={
              articles:[],
              page:1,
              limit:1,
              loading:false,
          }
      }

      async componentDidMount(){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ea76f16e4b34bf9aa99ff776a902b23&page=${this.state.page-1}&pageSize=9`;
            this.setState({loading:true});
            let data=await fetch(url);
            let pdata=await data.json();
            console.log(pdata);
            this.setState({articles:pdata.articles,limit:(pdata.totalResults)/9,loading:false}); 
      }

      handleprev=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ea76f16e4b34bf9aa99ff776a902b23&page=${this.state.page-1}&pageSize=9`;
        this.setState({loading:true});
        let data=await fetch(url);
        let pdata=await data.json();
        console.log(pdata);
        this.setState({
            articles:pdata.articles,
            page:this.state.page-1,
            loading:false,
        });
        
      }
      handlenext=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ea76f16e4b34bf9aa99ff776a902b23&page=${this.state.page+1}&pageSize=9`;
        this.setState({loading:true});
        let data=await fetch(url);
        let pdata=await data.json();
        console.log(pdata);
        this.setState({
            articles:pdata.articles,
            page:this.state.page+1,
            loading:false,
        });
    }
    render() {
        
        return (
            <div className='container'>
                <h1 style={{textAlign:"center"}}>Top Headlines</h1>
                {this.state.loading && <Spinner/>} 
                <div className="row my-1" >
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key={element.urlToImage}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                    </div>
                    })}
                </div>
                <div className="btn d-flex justify-content-between">
                <button type="button" className="btn btn-dark" onClick={this.handleprev} disabled={this.state.page<=1}>&laquo; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handlenext} disabled={this.state.page+1>Math.ceil(this.state.limit)}>Next &raquo;</button>
                </div>
                
                
                
                
            </div>
        )
    }
}

export default News
