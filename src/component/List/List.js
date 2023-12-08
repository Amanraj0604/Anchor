import React from 'react';
import videosData from '../Data.js'; 
import '../List/List.css';

const List = () => {
  return (
    <div className='list-con'>
      <p>Others video potentials</p>
      <div className="navigation">
        <li>Rank</li>
        <li>Title</li>
        <li>Thumbail</li>
        <li>Views</li>
        <li>Likes</li>
        <li>Comments</li>
        <li>Uploaded on</li>
        <li>Estimated earning</li>
      </div>
      {videosData.map(video => (
        <div className="data" key={video.id}>
          <p>{video.number}</p>
          <p>{video.title}</p>
          <p><img className='imgcls' src={video.image} alt="" /></p>
          <p>{video.views}</p>
          <p>{video.likes}</p>
          <p>{video.comments}</p>
          <p>{video.date}</p>
          <p>{video.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
