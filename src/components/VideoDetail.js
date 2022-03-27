import React from 'react';

const VideoDetail = ({video, searchTerm}) => {
     if(!video){
        return <div style={{
            height: '50vh',
            width: '50vw',
            fontSize: '40px',
            // textAlign: 'center',
            border: '2px solid red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '20vw',
            marginTop: '20px'
        }}>No videos Found...(</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return( 
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} key={video.id.videoId} title={video.snippet.title}/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
           
        </div>
    );
}

export default VideoDetail;