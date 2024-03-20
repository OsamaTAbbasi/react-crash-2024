import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCard from "./components/HomeCard.jsx"
import JobListings from "./components/JobListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <HomeCard/>
            <JobListings/>
            <ViewAllJobs/>
        </>
    );
};
export default App;