import React, { useState } from 'react';
import '../ViewPostPage.css';
import { NavLink } from 'react-router-dom';

const PostLinksMenu = ({ slug, heading, car }) => {
  const [isActive, setIsActive] = useState(true)
  return (
    <>
      <li>
        <NavLink
          to={`/viewpost/${car}/${slug}`}
          className='post-links'
          activeStyle={{ fontWeight: 'bold' }}
        >
          {heading}
        </NavLink>
      </li>
    </>
  )
};

export default PostLinksMenu;