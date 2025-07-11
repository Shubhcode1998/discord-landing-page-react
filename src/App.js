import AppNavBar from './components/AppNavBar';
import Hero from './components/Hero';
import Common from './components/Common';
import Commonleft from './components/Commonleft';
import Chillin from './components/Chillin';
import AppFooter from './components/AppFooter';
import imgfirst from '../src/Images/img-first.svg';
import imgthird from '../src/Images/img-third.svg';
import imgsecond from '../src/Images/img-second.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//new comment
function App() {
  return (
    <div className="App">

      <AppNavBar />
      
      <Hero />

      <Common 
      heading="Create an invite-only place where you belong"
      para = "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
      imsrc = {imgfirst}
      />

      <Commonleft 
      heading="Where hanging out is easy" 
      para="Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call." 
      imsrc={imgsecond} />

 
      <Common 
      heading="From few to a fandom"
      para = "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
      imsrc = {imgthird}
      />

      <Chillin />

      <AppFooter />
      
    </div>
  );
}

export default App;
