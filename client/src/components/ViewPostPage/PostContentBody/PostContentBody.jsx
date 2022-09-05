import React, { useState, useEffect } from 'react';
import './PostContentBody.css';
import Moment from 'react-moment';
import Spinner from '../../Layout/Spinner';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { getPostBySlug } from '../../../api/post';
import CommentForm from '../Comments/CommentForm';
import CommentItem from '../Comments/CommentItem';

function youtubeRender() {
  var itemToRender = document.querySelectorAll(`[src*='ytvid']`);
  itemToRender.forEach(oldItem => {
    var oldItemLink = oldItem.src.replace('#ytvid', '');
    var oldItemId = oldItem.src.alt;
    var newItem = document.createElement('iframe');
    newItem.style.width = '560px';
    newItem.style.height = '315px';
    newItem.setAttribute('id', oldItemId);
    newItem.setAttribute('src', oldItemLink);
    newItem.setAttribute('title', 'Temp title');
    newItem.setAttribute('frameborder', '0');
    newItem.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    oldItem.parentNode.replaceChild(newItem, oldItem);
  });
}

//const PostContentBody = ({ getPostBySlug, id, post: { singlePost, loading } }) => {
const PostContentBody = ({ id }) => {
  const [currentPost, setCurrentPost] = useState();
  var slideIndex = 1;

  useEffect(() => {
    async function fetchData() {
      setCurrentPost(await getPostBySlug(id));
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (currentPost && currentPost.post !== '') {
      youtubeRender();
      carouselRender(slideIndex);
    }
  }, [currentPost]);
  
  function currentSlide(n) {
    carouselRender(slideIndex = n)
  }

  function carouselRender(n) {
    var slides = document.querySelectorAll(`[src*='carouselimg']`);
    var dots = document.querySelectorAll(`[src*='carouseldot']`);
  
    if (slides.length !== 0 && dots.length !== 0) {
      var i;

      dots.forEach((dot) => {
        const slideNum = dot.src[dot.src.length-1];
        dot.addEventListener('click', (e) => { currentSlide(slideNum) })
      });
  
      if (n > slides.length)
        slideIndex = 1
  
      if (n < 1)
        slideIndex = slides.length
  
      for (i = 0; i < slides.length; i++)
        slides[i].style.display = 'none';
  
      for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(' active', '');
  
      slides[slideIndex-1].style.display = 'block';
      dots[slideIndex-1].className += ' active';
    }
  }

  return currentPost === null || currentPost === undefined ? (
    <Spinner />
  ) : (
    <>
      {currentPost !== undefined && (
        <>
          <h1 >{currentPost.heading}</h1>
          <p className='pcb-date'>
            Posted on{' '}
            <Moment format='DD MMMM, YYYY' className='pcb-date-format'>
              {currentPost.createdDate}
            </Moment>
          </p>
          <div className="reactMarkdown">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={currentPost.post} />
          </div>
          <hr className='pcb-dropdown-divider' />          
          <div className='comments'>
            {currentPost.comments.map(comment => (
              <CommentItem key={comment._id} comment={comment} postId={id} />
            ))}
          </div>
          <CommentForm postId={id} />
        </>
      )}
    </>
  )
};

// PostContentBody.propTypes = {
//   getPostBySlug: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   post: state.post
// });

// export default connect(mapStateToProps, { getPostBySlug })(PostContentBody);


export default PostContentBody;