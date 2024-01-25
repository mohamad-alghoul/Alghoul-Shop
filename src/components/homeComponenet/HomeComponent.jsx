
import { Search } from "../search/Search"
import { SearchResultsList } from "../search/SearchResultsList"
import { Offer  } from "../offer/Offer";
import { NoSearchFound } from "../search/NoSearchFound";
import { useState } from "react";
import { DefaultSearch } from "../search/DefaultSearch";
import { Catagores } from "../catagores/Catagores";
import { Footer } from "../footer/Footer";


export const HomeComponent = () => {
  
  const [input, setInput] = useState("");
  const [results,setResult]= useState([])
  const [searchClicked, setSearchClicked] = useState(false);

  let content;

  if (!searchClicked ) {
    content = <DefaultSearch />;
  } else if (results.length === 0) {
    content = <NoSearchFound />;
  } else if (results.length > 0) {
    content = <SearchResultsList input={input} results={results} />;
  }


  
  
  return (<div className="bg-bodyBG h-screen py-4 px-6">

  
               <Offer />
                <Search  setResult={setResult}  input={input} setInput={setInput} setSearchClicked={setSearchClicked}  />
                {content}
               <Catagores />
               <Footer />
  </div>
  )
}
