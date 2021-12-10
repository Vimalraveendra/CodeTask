import "./SearchInput.css"
import {FaSearch} from "react-icons/fa"


const SearchInput=({handleSearch,search})=>{
    return(
        <div className="input-container">
            <div className="input-icons">
                    <input type="text" 
                    id="myInput" 
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search for description..." />
                    <FaSearch className="icon"/>
            </div>
         
        </div>
    )
}


export default SearchInput;