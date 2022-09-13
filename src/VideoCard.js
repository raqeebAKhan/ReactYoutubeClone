import React, {useState} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';



function VideoCard({likes,embedId, title, channel, views, timestamp, channelImage} ) {
  const [liked, setLiked] = useState(false)
  const [unliked, setUnliked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  return (
    <div className='videoCard'>
       <iframe  className='videoCard_frame' width="560" height="315"  src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
  
      <div className='videoCard_info'>
        <AccountCircleIcon className="videoCard_avatar"
        alt={channel} src={channelImage}/>
        <div className='videoCard_text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} .  {timestamp}</p>
          <div className='Thumbicon'>
				{liked ? (
					<ThumbUpIcon

						onClick={(e) => setLiked(false) }
					/>
				) : (
					<ThumbUpOutlinedIcon 
					
						onClick={(e) =>{setLiked(true); setLikeCount((likes) => likes + 1);}}
					/>
					
				)}
				<p>{likeCount}</p><p>Like</p>
			</div>
	
      <div className='Thummbicon'>
				{unliked ? (
					<ThumbDownIcon 
						onClick={(e) => setUnliked(false)}
					/>
				) : (
					<ThumbDownOffAltIcon

						onClick={(e) => {setUnliked(true); setLikeCount((likes) => likes + 1);}}
					/>
				)}
				<p>{likeCount}</p><p>Dislike</p>
			</div>
			</div>
        
        </div>

      </div>
      
  
  )
}

export default VideoCard
