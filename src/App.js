import { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbotron from "./components/Jumbotron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";
import TextAnim from "./components/TextAnim";
import { supabase } from './supabaseclient'


function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: searches } = await supabase
      .from('searches')
      .select('*')
    // Update the state
    setMyBooks(searches);
  }
  // Execute the function
  getBooks();
  // Below is what displays when you use <Library />
  return (
    <table>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.popular}</td>
        </tr>
      ))
    }
    </table>
  )
}

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('Images');
  const { response, isLoading, error, fetchData } = useAxios(`search/
  photos?page=1&query=cats&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      popular searches:
      <Library/>
      <Jumbotron>
      <SearchField />
      </Jumbotron>
      <Images />
      <TextAnim/>
      
    </ImageContext.Provider>
   
   
  );
}

export default App;