
import { SearchResult } from "./SearchResult";


export const SearchResultsList = ({ results }) => {
  let cssClasses = "mt-4 flex h-60 w-full border-double border-8 border-gray-500 shadow-inner";

  if (results.length <= 4) {
    cssClasses += ' justify-center gap-8';
  } else {
    cssClasses += ' justify-between';
  }
  
  return (
    <div className={cssClasses}>
      {results.slice(0, 4).map((result,id) => {

        return <SearchResult title={result.title} img={result.img}  key={id}  id={result.id}/>;
      })}
    </div>
  );


    }  



