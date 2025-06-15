import { useState, useEffect } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState('');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch(input.trim());
    }, 500); // debounce: 500ms
    return () => clearTimeout(delayDebounce);
  }, [input, onSearch]);

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search movies..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}

export default SearchBar;
