import "./SearchInput.css"
import {FaSearch} from "react-icons/fa"

export interface Props{
    handleSearch:(e:React.SyntheticEvent<HTMLInputElement>)=>void,
    search:string
}

const SearchInput:React.FC<Props> =({handleSearch,search})=>{
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