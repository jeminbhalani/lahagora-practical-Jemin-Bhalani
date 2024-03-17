import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchImagesData, pageSelector, resetPagination } from "./redux";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import Gallery from "./components/Gallery";

const App = () => {
  const dispatch = useDispatch();
  const page = useAppSelector(pageSelector);
  const [search, setSearch] = useState("");

  const fetchImages = async (searchQuery = "") => {
    try {
      dispatch(fetchImagesData({ page, query: searchQuery }));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    if(search?.length){
      // const getData = setTimeout(() => {
      //   fetchImages(search);
      // }, 2000);
      // return () => clearTimeout(getData);
    }else{
      fetchImages();
    }
  }, [search]);

  const handleSearchChange = (e) => {
    dispatch(resetPagination());
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <h1>Unsplash Gallery</h1>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search images..."
          value={search}
          onChange={handleSearchChange}
        />
        <button
          className="search-button"
          onClick={() => fetchImages(search)}
        >
          Search
        </button>
      </div>
      <Gallery loadMore={fetchImages} />
    </div>
  );
};

export default App;
