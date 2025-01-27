
import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Buffer from "./Buffer";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
  const[articles, setArticles]=useState([])
  const[loading, setLoading]=useState(true)
  const[page, setPage]=useState(1)
  const[totalResults, setTotalResults]=useState(0)
  
    
    useEffect(()=>{
      document.title = `NewsApp-${props.category}`;
      updateNews();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  
  const updateNews = async()=>{
    props.setProgress(0);
    //  const url= `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b3547c91577343878a0ebb3a8f5ae40c&page=1&pageSize=6`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b3547c91577343878a0ebb3a8f5ae40c&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(50);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    props.setProgress(80);
    setArticles(parsedData.articles )
    setTotalResults(parsedData.totalResults)  
    setLoading(false)
    props.setProgress(100);

  }
 
  
 
  const fetchMoreData =async() => {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=b3547c91577343878a0ebb3a8f5ae40c&page=1&pageSize=6`;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b3547c91577343878a0ebb3a8f5ae40c&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }
  

    return (
      
     <>
        <h1 className="text-center " style={{ margin: "35px 0px", marginTop:"90px" }}>
          NewsApp-Top {props.category} headlines
        </h1>
        {loading && <Buffer/>}
       
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Buffer/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return(
              <div className="col-md-4" key={element.url}>
              
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : "...."} description={element.description? element.description.slice(0, 54) : "...."}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                
              </div>
              )
            })}
            </div>
          </div>
        </InfiniteScroll>
        
        </>
    )
  
}

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general",
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News;










