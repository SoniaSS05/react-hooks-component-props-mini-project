import React from "react";
import Article from "./Article";

function ArticleList(props){
   // console.log(props.data.posts[0].preview);
    return(
        <main>
            {(props.posts).map((elem) => (
            
                                <React.Fragment key={elem.id}>
                                   <Article 
                                        title = {elem.title} 
                                        date = {elem.date}
                                        preview = {elem.preview}
                                   />
                                </React.Fragment>
                                ))
            }     
        </main>
    );
}

export default ArticleList;