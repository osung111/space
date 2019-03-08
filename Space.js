import React from 'react';
import './Space.css';

import LinesEllipsis from 'react-lines-ellipsis'


function Space({nameP,imageP,intro}){
  return (
    <div className="little_space">
      <div className="intro1">
          <GetImage image ={imageP} />
       
      </div>
      <div className="intro2">
          <div className="planet_name">
            <h1>{nameP}</h1>
          </div>
          <div>
            <LinesEllipsis
                  text={intro}
                  maxLine='3'
                  ellipsis=' -more-'
                  trimRight
                  basedOn='letters'
                  />
          </div>
    </div>
  </div>
  )

}


function GetImage({image}){
  return(
    <img  src={image} />
  )
}


export default Space;
