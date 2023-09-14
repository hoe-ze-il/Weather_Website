import SearchCSS from "./Search.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { GrClose } from "react-icons/gr";

function Search({ data }) {
  const { setLatLon } = useContext(DataContext);
  const [filteredData, setFilteresData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearch(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteresData([]);
    } else {
      setFilteresData(newFilter);
    }
  };

  const closeData = () => {
    setFilteresData([]);
    setSearch("");
  };

  return (
    <div className={SearchCSS.container}>
      <div className={SearchCSS["input-container"]}>
        <input
          className={SearchCSS["search-input"]}
          type="text"
          placeholder="Search for city..."
          value={search}
          onChange={handleSearch}
        />
        <div className={SearchCSS["search-icon"]}>
          {filteredData.length === 0 ? (
            <BsSearch size={20} className="icon" />
          ) : (
            <GrClose
              size={20}
              stroke={"white"}
              className="icon"
              onClick={closeData}
            />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={SearchCSS["drop-down"]}>
          {filteredData.slice(0, 4).map((value) => {
            return (
              <ul key={value.id} className={SearchCSS["list-datas"]}>
                <li
                  onClick={() =>
                    `${setLatLon(
                      `${value.coord.lat},${value.coord.lon}`
                    )} ${setFilteresData([])} ${setSearch("")}`
                  }
                >
                  {value.name}, {value.country_name}
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
