import './App.css';
import Common from './components/Common';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgfirst from '../src/Images/img-first.svg'
import imgthird from '../src/Images/img-third.svg'

function App() {
  return (
    <div className="App">

      <Hero />

      <Common 
      heading="Create an invite-only place where you belong"
      para = "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
      imsrc = {imgfirst}
      />
 
      <Common 
      heading="From few to a fandom"
      para = "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
      imsrc = {imgthird}
      />

    </div>
  );
}

export default App;
