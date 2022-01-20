import React from 'react';
import './cards.css'

const Card = ({id,title, date, imageURL}) => {
   
    const [click, setclick] = React.useState(false);
    
    
    const Likebutton = (
        <>
        <ul> <button  disabled={click} onClick={() => setclick(true)}  className="like-button" type="button" >LIKE!</button></ul> 
        </>
    );
    const UnlikeButton = (
        <>
        <ul>  <button  onClick={() => setclick(false)} className='unlike-button' type='button'> UNLIKE :(</button></ul>
        </>
    );


    return (
      <article className="my-card">
        <header className="my-card-header">
          <h2>{title}</h2>
          <p>{date}</p>
        </header>
        <div>
            <img src={imageURL} alt="MARS"></img> <br></br>
           
              {!click && Likebutton}
              {click&& UnlikeButton}
              
              

          
        </div>
      </article>
    )
  }
  
  export default Card;