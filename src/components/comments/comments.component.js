import React from 'react';
import './comments.style.scss';

function Comments() {
  return (
    <section className='content-item col-12 col-md-10 mx-auto' id='comments'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <form>
              <h3 className='pull-left'>Add Comment</h3>
              <fieldset>
                <div className='d-flex'>
                  <img
                    className='img-responsive mr-1 rounded-circle avatar'
                    src='https://bootdey.com/img/Content/avatar/avatar1.png'
                    alt=''
                  />

                  {/* <div className='form-group col-10 offset-1'> */}
                  <textarea
                    className='form-control'
                    id='message'
                    placeholder='Your comment'
                    required
                  ></textarea>
                  {/* </div> */}
                </div>
              </fieldset>
              <button type='submit' className='btn btn-success submit-btn'>
                Submit
              </button>
            </form>
            <h3>4 Comments</h3>
            <div className='media'>
              <a className='pull-left' href='a'>
                <img
                  className='media-object rounded-circle avatar'
                  src='https://bootdey.com/img/Content/avatar/avatar1.png'
                  alt=''
                />
              </a>
              <div className='media-body'>
                <h4 className='media-heading'>John Doe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <ul className='list-unstyled list-inline media-detail pull-left'>
                  <li>
                    <i className='fa fa-calendar'></i>27/02/2014
                  </li>
                </ul>
                <ul className='list-unstyled list-inline media-detail pull-right'>
                  <li className='edit'>
                    <i className='far fa-edit'></i>
                  </li>
                  <li className='like'>
                    <i className='fa fa-heart'></i>13
                  </li>
                </ul>
              </div>
            </div>
            <div className='media'>
              <a className='pull-left' href='a'>
                <img
                  className='media-object rounded-circle avatar'
                  src='https://bootdey.com/img/Content/avatar/avatar1.png'
                  alt=''
                />
              </a>
              <div className='media-body'>
                <h4 className='media-heading'>John Doe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <ul className='list-unstyled list-inline media-detail pull-left'>
                  <li>
                    <i className='fa fa-calendar'></i>27/02/2014
                  </li>
                </ul>
                <ul className='list-unstyled list-inline media-detail pull-right'>
                  <li className='edit'>
                    <i className='far fa-edit'></i>
                  </li>
                  <li className='like'>
                    <i className='far fa-heart'></i>13
                  </li>
                </ul>
              </div>
            </div>
            <div className='media'>
              <a className='pull-left' href='a'>
                <img
                  className='media-object rounded-circle avatar'
                  src='https://bootdey.com/img/Content/avatar/avatar1.png'
                  alt=''
                />
              </a>
              <div className='media-body'>
                <h4 className='media-heading'>John Doe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <ul className='list-unstyled list-inline media-detail pull-left'>
                  <li>
                    <i className='fa fa-calendar'></i>27/02/2014
                  </li>
                </ul>
                <ul className='list-unstyled list-inline media-detail pull-right'>
                  <li className='edit'>
                    <i className='far fa-edit'></i>
                  </li>
                  <li className='like'>
                    <i className='fa fa-heart'></i>13
                  </li>
                </ul>
              </div>
            </div>
            <div className='media'>
              <a className='pull-left' href='a'>
                <img
                  className='media-object rounded-circle avatar'
                  src='https://bootdey.com/img/Content/avatar/avatar1.png'
                  alt=''
                />
              </a>
              <div className='media-body'>
                <h4 className='media-heading'>John Doe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <ul className='list-unstyled list-inline media-detail pull-left'>
                  <li>
                    <i className='fa fa-calendar'></i>27/02/2014
                  </li>
                </ul>
                <ul className='list-unstyled list-inline media-detail pull-right'>
                  <li className='edit'>
                    <i className='far fa-edit'></i>
                  </li>
                  <li className='like'>
                    <i className='fa fa-heart'></i>13
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
