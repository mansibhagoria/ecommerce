import NewArrivals from "./components/NewArrivals/NewArrivals";
import  Landing from './components/Landing/Landing'
import TopSelling from './components/TopSelling/TopSelling'
import Customers from "./components/OurHappyCustomers/Customers";
import Browse from "./components/BrowseMore/Browse" 
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="container">
  
        <Landing/>
    
      <div className="section1">
        <NewArrivals/>
      </div>

      
      <div className="section2">
        <TopSelling/>
      </div>
      <div className="section2">
        <Customers/>
      </div>
      <div className="section2">
        <Browse/>
      </div>
      <div className="section2">
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
