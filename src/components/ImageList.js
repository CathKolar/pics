import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({id, urls, description}) => {
    return (
      <img key={id} src={urls.regular} alt={description} />
    ); //alt text under "description"
  });
  return <div>{images}</div>;
};

export default ImageList;
