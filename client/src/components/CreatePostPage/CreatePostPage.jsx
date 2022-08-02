import React, { useState } from 'react';
import './CreatePostPage.css';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const CreatePostPage = ({ addPost }) => {
  const [formData, setFormData] = useState({
    heading: '',
    car: '',
    thumbnail: '',
    description: '',
    content: ''
  });

  const handleFormDataChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData.heading, formData.car, formData.thumbnail, formData.description, formData.content);
  };

  return (
    <div className='cpp-container'>
      <div className='row'>
        <div className='col right-input'>        
          <button
            type='submit'
            className='btn btn-success overallBtn'
            value='Overall Submit'
            onClick={(e) => handleSubmit(e)}
          >
            Create Post
          </button>
          <div className='dropdown-divider' />
          <h1>Your Post</h1>
          <form className='cpp-form-left'>
            <div className='form-group'>
              <label>Heading</label>
              <input
                type='text'
                name='heading'
                className='form-control'
                placeholder='Enter a heading'
                value={formData.heading}
                onChange={(e) => handleFormDataChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <label>Car</label>
              <select
                name='car'
                className='form-control'
                onChange={(e) => handleFormDataChange(e)}
                required
              >
                <option disabled selected value>--Select--</option>
                <option value='Civic'>Civic</option>
                <option value='Wago'>Wago</option>
                <option value='Frogo'>Frogo</option>
                <option value='EF9'>EF9</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Thumbnail</label>
              <input
                type='text'
                name='thumbnail'
                className='form-control'
                placeholder='Enter a Thumbnail Image'
                value={formData.thumbnail}
                onChange={(e) => handleFormDataChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <label>Description</label>
              <textarea
                type='text'
                rows='5'
                name='description'
                className='form-control'
                placeholder='Enter a description'
                value={formData.description}
                onChange={(e) => handleFormDataChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <label>Content</label>
              <textarea
                type='text'
                rows='5'
                name='content'
                className='form-control'
                placeholder='Enter content'
                value={formData.content}
                onChange={(e) => handleFormDataChange(e)}
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default connect(null, { addPost })(CreatePostPage);