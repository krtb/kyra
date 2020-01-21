import React from 'react';


const VideoDetail = ({ video }) => {
    // instead of props.video => video
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed" >
                <iframe title={video.snippet.title} src={videoSrc} />
            </div>
            <div className="ui segment" >
                <div className="ui header" >
                    {video.snippet.title}
                </div>
                <p>
                    {video.snippet.description}
                </p>
            </div>
        </div>
    )
}

export default VideoDetail