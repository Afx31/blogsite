import React from 'react';
import { Link } from 'react-router-dom';

const PostLinksMenuMobile = ({ slug, heading, car }) => {
  return (
    <>
      <option>
        <Link to={`/viewpost/${car}/${slug}`}>{heading}</Link>
      </option>
    </>
  )
};

export default PostLinksMenuMobile;