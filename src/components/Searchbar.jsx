import React from 'react'

const Searchbar = () => {
  return (
    <div>
        <div className="right">
          <button className="filterButton">
            <img className="filter" src={Filter} alt="" />
          </button>
          <input
            className="input"
            type="searchbox"
            id="input"
            placeholder="Card ID, Role or Staff name"
          />
          <img className="search-icon" id="input" src={search} alt="" />
        </div>
    </div>
  )
}

export default Searchbar