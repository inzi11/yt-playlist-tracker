import AddPlaylistModal from "./ui/addPlaylistForm/AddPlaylistModal"
import Navbar from "./ui/navbar/navbar"
import Sidebar from "./ui/SideBar/Sidebar"

function App() {
  return (
    <div className="h-screen" >
      <div className="h-15">
      <Navbar />
      </div>

      <div className="h-[calc(100%-60px)] ">
        <Sidebar />
      </div>

    </div>
  )
}

export default App