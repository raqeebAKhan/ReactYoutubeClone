import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';





export default function Header() {
  const [inputSearch, setInputSearch] = useState("")
  return (
    <div className='header'>
      <div className='header_left'>
      <MenuSharpIcon/>
      <Link to="/">
      <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png" alt=""/>
      </Link></div>

      <div className='header_input'>
      <input onChange={(e)=> setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type="text"/>
      
      <Link to={`/search/${inputSearch}`}><SearchIcon className='header_inputButton'/></Link>
      </div>

      <div className='header_icons'>
      <VideoCallIcon className='header_icon'/>
      <NotificationsNoneIcon className='header_icon'/>
      <AccountCircleIcon className='header_icon'/></div>
    </div>
  )
}

