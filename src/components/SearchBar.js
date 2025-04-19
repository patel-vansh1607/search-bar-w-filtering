import "../styles/SearchBar.css"

const dataList = [
    "Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry", "Boysenberry", "Breadfruit",
    "Cantaloupe", "Cherry", "Clementine", "Coconut", "Cranberry", "Currant", "Date", "Dragonfruit",
    "Durian", "Elderberry", "Feijoa", "Fig", "Goji Berry", "Gooseberry", "Grape", "Grapefruit",
    "Guava", "Honeydew", "Huckleberry", "Jackfruit", "Jambul", "Jujube", "Kiwano", "Kiwi",
    "Kumquat", "Lemon", "Lime", "Longan", "Loquat", "Lychee", "Mandarin", "Mango",
    "Mangosteen", "Mulberry", "Nance", "Nectarine", "Olive", "Orange", "Papaya", "Passionfruit",
    "Peach", "Pear", "Persimmon", "Pineapple", "Plantain", "Plum", "Pomegranate", "Pomelo",
    "Prickly Pear", "Quince", "Raspberry", "Red Banana", "Red Currant", "Salak", "Satsuma", "Sapodilla",
    "Sapote", "Soursop", "Star Apple", "Starfruit", "Strawberry", "Surinam Cherry", "Tamarillo", "Tamarind",
    "Tangerine", "Tomato", "Ugli Fruit", "Watermelon", "White Currant", "White Sapote", "Wild Banana", "Yuzu",
    "Ziziphus Fruit", "Ackee", "Bilberry", "Cupuacu", "Davidson's Plum", "Emu Apple", "Finger Lime", "Gac Fruit",
    "Horned Melon", "Indian Fig", "Jaboticaba", "Langsat", "Mamoncillo", "Marionberry", "Miracle Fruit", "Monstera",
    "Naranjilla", "Pawpaw", "Rambutan", "Rose Apple", "Santol", "Sugar Apple", "Velvet Apple", "Wood Apple"
  ];
  
  const SearchFilter = () => {
    const [query, setQuery] = useState("");
  
    const handleChange = (e) => {
      setQuery(e.target.value.toLowerCase());
    };
  
    const filteredData = dataList.filter((item) =>
      item.toLowerCase().includes(query)
    );

const SearchBarFilter = () =>{
    return(
        <div className="main-div">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search fruits..."
                    onChange={handleChange}
                    className="search-input"
                />
                <ul className="results-list">
                    {filteredData.map((item, index) => (
                    <li key={index} className="result-item">
                        {item}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SearchBarFilter