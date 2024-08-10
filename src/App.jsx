import { useEffect, useState } from 'react'
import './App.css'
import jobCardData from "./data/jobs.json";
import FilterPanels from './components/FilterContainer';
import Joblists from './components/JoblistsData';
import Header from './components/Header';
import MainRightSide from './MainRightSide';

function App() {

  const [jobCard, setJobCard] = useState([]);
  const [filters, setFilters] = useState({
    location: [],
    function: []
  })

  const [filterText, setFilterText] = useState('');

  const [index,setIndex] = useState(0)
  console.log(index,"indexxxxxxxxx")
  useEffect(() => {

    let filteredJobcards = jobCardData.jobList;

    if (filters.location.length > 0) {
      filteredJobcards = filteredJobcards.filter(jobCard => filters.location.includes(jobCard.location))
    }

    if (filters.function.length > 0) {
      filteredJobcards = filteredJobcards.filter(jobCard => filters.function.includes(jobCard.function))
    }

    setJobCard(filteredJobcards);
  }, [filters])

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className='app'>
      <div className='header'>
        <Header jobsData={jobCard} filterText={filterText} onFilterTextChange={setFilterText}/>
      </div>

      <nav>
        <FilterPanels filters={filters} onChange={handleFilterChange} />
      </nav>

      <div className='main'>
        <div className="left-main">
          <Joblists jobs={jobCard} filterText={filterText} index={index} onIndexChange = {setIndex} />
        </div>
        <div className="right-main">
          {
            <MainRightSide jobsdata={jobCard[index]} />
          }
          
        </div>
      </div>
    </div>
  )
}

export default App










