import React from "react";




function MatchListItem(props) {
    return (
      <div>
        <img src={props.profile.photo} alt="Imagem da pessoa" />
        <p>{props.profile.name}</p>
      </div>
    );
  }
  
  export default MatchListItem;
  