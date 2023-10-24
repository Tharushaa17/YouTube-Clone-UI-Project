import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material';
import { ChannelDetails, Feed, NavBar, SearchFeeds, VideoDetails} from './components'

const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <NavBar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" element={<VideoDetails/>}/>
                <Route path="/channel/:id" element={<ChannelDetails/>}/>
                <Route path="/search/searchTerm" element={<SearchFeeds/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App