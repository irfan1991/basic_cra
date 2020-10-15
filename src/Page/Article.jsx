import React from 'react'
import TitleArticle from "./TitleArticle";
import ContentArticle from "./ContentArticle";

export default function Article() {
    return (
        <div style={{margin: '5px'}}>
            <TitleArticle text="Belajar REact"/>
            <ContentArticle>
                <p>
                Since component logic is written in JavaScript
                 instead of templates, you can easily pass rich data through your app and keep state out of the DOM.    
                </p> 
                <p>
                React can also render on the server using Node and power mobile apps using React Native.  
             </p>               
            </ContentArticle>            
        </div>
    )
}
