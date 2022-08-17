import React, { useEffect } from 'react';
import './PostContentBody.css';
import Moment from 'react-moment';
import Spinner from '../../Layout/Spinner';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { connect } from 'react-redux';
import { getPostBySlug } from '../../../actions/post';
import CommentForm from '../Comments/CommentForm';
import CommentItem from '../Comments/CommentItem';

const PostContentBody = ({ getPostBySlug, id, post: { singlePost, loading } }) => {
  var slideIndex = 1;

  useEffect(() => {
    getPostBySlug(id);
  }, [getPostBySlug, id]);

  useEffect(() => {
    if (singlePost && singlePost.post !== '') {
      youtubeRender();
      carouselRender(slideIndex);
    }
  }, [singlePost]);
  
  function currentSlide(n) {
    carouselRender(slideIndex = n)
  }

  function carouselRender(n) {
    var slides = document.querySelectorAll(`[src*='carouselimg']`);
    var dots = document.querySelectorAll(`[src*='carouseldot']`);
  
    if (slides.length !== 0 && dots.length !== 0) {
      var i;
  
      for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', (e) => {
          const slideNum = e.target.src[e.target.src.length - 1];
          currentSlide(slideNum);
        });
      }
  
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

  return loading || singlePost === null ? (
    <Spinner />
  ) : (
    <>
      <h1 className='pcb-heading'>{singlePost.heading}</h1>
      <p className='pcb-date'>
        Posted on{' '}
        <Moment format='DD MMMM, YYYY' className='pcb-date-format'>
          {singlePost.createdDate}
        </Moment>
      </p>
      <div className="reactMarkDown">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={singlePost.post} />
      </div>
      <hr className='pcb-dropdown-divider' />
      <div className='comments'>
        {singlePost.comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} postId={id} />
        ))}
      </div>
      <CommentForm postId={id} />
    </>
  )
};

PostContentBody.propTypes = {
  getPostBySlug: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPostBySlug })(PostContentBody);