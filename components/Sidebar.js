

import {HomeIcon,
   SearchIcon, 
   LibraryIcon, 
   PlusCircleIcon, 
   RssIcon,
  } from "@heroicons/react/outline";
  import {
    HeartIcon
   } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";

const Sidebar = () => {

const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  console.log('you picked playlist >>', playlistId)
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }

   }, [session, spotifyApi])
console.log(playlists)
    return(
  <div className='text-gray-500 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll 
  scrollbar-hide h-screen p-3 sm:max-w-[12rem] lg:max-w-[15] hidden md:inline pb-36' >

    <div className='space-y-4'>

        <button className="flex items-center space-x-2 hover:text-white p-1 "> 
         <HomeIcon className="h-5 w-5" />
             <p>Home</p>
       </button> 
       

       <button className="flex items-center space-x-2  hover:text-white p-1"> 
      <SearchIcon  className="h-5 w-5"/>
            <p>Search</p>
       </button>

         <button className="flex items-center space-x-2  hover:text-white p-1"> 
       <LibraryIcon  className="h-5 w-5"/>
        <p>Your Library</p>
        </button>
        <hr className=" border-t-[0.1px] border-gray-900"/>

          
       <button className="flex items-center space-x-2  hover:text-white p-1 "> 
          <PlusCircleIcon className="h-5 w-5" />
            <p>Create Playlist</p>
      </button> 

    

        <button className="flex items-center space-x-2 text-blue-500 hover:text-white p-1"> 
      <HeartIcon  className="h-5 w-5"/>
      <p>Liked Songs</p>
      </button>
      <button className="flex items-center space-x-2  text-green-500 hover:text-white p-1"> 
        <RssIcon  className="h-5 w-5"/>
       <p>Your Episodes </p>
      </button>
     <hr className=" border-t-[0.1px] border-gray-900"/>

     {/* Playlist */}
     {playlists.map((playlist) => ( 
      <p 
      key={playlist.id} 
      onClick={() => setPlaylistId(playlist.id)}
      className="cursor-pointer hover:text-white"
      > 
      {playlist.name}</p>
     ))}
     


    </div>
   </div>
   );
}

export default Sidebar;
    