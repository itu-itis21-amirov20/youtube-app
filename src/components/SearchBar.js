import React, {useState} from 'react';
import NovruzAmirov from './NovruzAmirov';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(term === ''){
            return <NovruzAmirov />;
        }
        onFormSubmit(term);
    }

    return(
        <div className='search-bar ui segment'>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text"
                        value={term}
                        onChange={(e) => {setTerm(e.target.value)}}
                        placeholder="Enter the name of video"
                    />
                </div>
            </form>    
        </div>
    );
}

export default SearchBar;