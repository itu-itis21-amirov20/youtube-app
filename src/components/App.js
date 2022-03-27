import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import './Responsive.css'

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('building');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return(
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className='ui grid'>
                <div className='ui row responsive'>
                    <div className='ten wide column '>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='six wide column'>
                        <VideoList 
                            videos={videos} 
                            onVideoSelect={setSelectedVideo} //{(video) => {setSelectedVideo(video)}
                        />
                    </div>                    
                </div>                
            </div>            
        </div>
    );
}

export default App;