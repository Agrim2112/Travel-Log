import React from 'react';
import { Link } from 'react-router-dom';

const Story = ({ story }) => {

    const editDate = (createdAt) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(createdAt);
        var datestring = d.getDate() + " " +monthNames[d.getMonth()] + "," + d.getFullYear() 
        return datestring
    }

    const truncateContent = (content) => {
        if (content.length <= 123) {
            return content;
        }
        const trimmedString = content.substr(0, 119)+"...";
        return trimmedString;
    }
    const truncateTitle= (title) => {
        const trimmedString = title.substr(0, 22);
        return trimmedString
    }
    
    return (

        <div className="story-card">
            <Link to={`/story/${story.slug}`} className="story-link">

                <img className=" story-image" src={`/storyImages/${story.image}`} alt={story.title} />
                <div className="story-content-wrapper">

                    <h5 className="story-title">
                        
                    {story.title.length > 26 ? truncateTitle(story.title)+"..." : story.title
                    
                    }
                    </h5>

                    <p className="story-dest">
                        {story.destination}
                    </p>

                    <p className="story-text"dangerouslySetInnerHTML={{__html : truncateContent( story.content)}}>
                        </p>
                    <p className="story-createdAt">{editDate(story.createdAt)} 
                    </p>
                </div>
            </Link>
        </div>

    )
}

export default Story;
