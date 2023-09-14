import React from 'react';
import './VideoCard.css';

const VideoCard = ({ videoData }) => {
  if (!videoData) {
    return null;
  }

  // Ensure the video URL is served over HTTPS
  const secureVideoUrl = videoData.video.replace('http://', 'https://');

  return (
    <div className="video-card">
      <iframe src={secureVideoUrl} title={videoData.heading} />
      <h2 className="video-title">{videoData.heading}</h2>
      <div className="tags">
        {videoData.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;
