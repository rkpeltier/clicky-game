import React from "react";

function CardFile(props) {
    return (
      <div className="card">
        <div className="img-container">
            {/*Add click*/}
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    );
  }
  
  export default CardFile;