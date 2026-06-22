import { useAppDispatch } from "@/store/hooks"
import { fetchPlaylists } from "@/store/slice/PlaylistSlice"
import { useEffect } from "react"

const PlaylistView = () => {

  const dispatch = useAppDispatch(); 

  useEffect(() => {

    (async () => {
      const res = dispatch(fetchPlaylists()); 
      
      console.log(res)
    })()

  }, [])
  return (
    <div>
      Playlist View 
    </div>
  )
}

export default PlaylistView
