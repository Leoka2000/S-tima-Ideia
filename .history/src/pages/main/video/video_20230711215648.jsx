import React, { useState } from 'react';
import './video.css';
import cauan from '../../../assets/videos/cauan-video.mp4'
import thumb from '../../../assets/images/Thumbnail.jpg'
import { FaPlay, FaTimes } from "react-icons/fa";

function Video() {
    const [showVideo, setShowVideo] = useState(false);

    function handlePlayClick() {
        setShowVideo(true);
        document.body.style.overflow = 'hidden';
    }

    function handleCloseClick() {
        setShowVideo(false);
        document.body.style.overflow = 'visible';
    }

    return (
        <section className="video-thumbnail">
            <div className='overlay-effect'>
                <p className='click'>Clique no video</p>
                <div
                    className="thumbnail-image"
                   
                >
                    <button
                        className="play-button"
                        onClick={handlePlayClick}
                    >
                       <div><FaPlay className="play-icon" /></div>
                    </button>
                </div>
                {showVideo && (
                    <div className="video-overlay">
                        <button className="close-button" onClick={handleCloseClick}>
                            <FaTimes className="close-icon" />
                        </button>
                        <div className="video-wrapper">
                            <video src={cauan} controls autoPlay />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Video