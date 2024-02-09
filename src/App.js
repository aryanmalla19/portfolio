import './App.css';
import Client from './component/Client';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Green from './component/Green';
import Header from './component/Header';
import Landing from './component/Landing';
import Projects from './component/Projects';
import Service from './component/Service';
import Testimonial from './component/Testimonial';
import TwoContainer from './component/TwoContainer';
function App() {
  return (
    <>
    <div className='bg-villa w-11/12 mx-auto'>
      <Header />
      <Landing />
      <div className='flex my-20 justify-between'>
        <div className='w-5/12'>
          <Client />
        </div>
        <div className='flex w-6/12 flex-col justify-self-end'>
          <Projects />
          <Projects />
          <Projects />
        </div>
      </div>
      <Green title='Redesign your existing website?' para='Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals.' btnText='Schedule A Call' photo='https://varunbhabhra.com/static/media/ctaDoodle2.cf395dd10c91bff7c8b40dce11314e1c.svg' />
      <Service/>
      <Green title='Where do we start?' para='Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals' btnText='Schedule A Call' photo='https://varunbhabhra.com/static/media/ctaDoodle1.355d59d69bebcce5ac8ef21be72698c5.svg'/>
      <TwoContainer/>
      <Testimonial />
      <Contact />
    </div>
    <Footer/>
    </>
  );
}

export default App;
