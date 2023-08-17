'use client';
import React, { useState } from 'react';
import Loading from '../Loading';

interface DictionaryProps {
  word: string;
  meanings: {
    partOfSpeech: string;
    definitions: { definition: string; example: string }[];
  }[];
}

const baseURL = process.env.NEXT_PUBLIC_API;

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const [dictionary, setDictionary] = useState<DictionaryProps | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>('noun');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (!search) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}/${search}`);
      const data = await response.json();
      setDictionary(data[0]);
    } catch (error) {
      setError('Error fetching data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  const handleInputChange = (value: string) => {
    setSearch(value);
    setSuggestions([]);

    if (value.trim() !== '') {
      const simulatedSuggestions = ['apple', 'banana', 'cherry', 'cat', 'dog'];
      setSuggestions(simulatedSuggestions);
    } else {
    }
  };
  const handleInputDelete = () => {
    setSearch('');
    setDictionary(null);
    setSuggestions([]);
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className=" max-w-containerSmall w-full mx-auto lg:my-10">
        <input
          type="text"
          className="input input-bordered w-full  max-w-xs "
          placeholder="search"
          value={search}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              fetchData();
            }
          }}
          onInput={() => handleInputDelete()}
          list="suggestions"
        />
        {suggestions.length > 0 && (
          <datalist id="suggestions">
            {suggestions.map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>
        )}

        {isLoading ? (
          <>
            <Loading />
          </>
        ) : error ? (
          <>
            <p className="mt-2 text-red-600">{error}</p>
          </>
        ) : dictionary ? (
          <div className=" my-10">
            <h2 className="text-2xl font-bold mb-4 sm:text-center lg:text-start">
              Word: {dictionary.word}
            </h2>
            <div className="border rounded-cardRadius">
              <div className="flex  p-5">
                {dictionary.meanings.map((meaning, index) => (
                  <button
                    key={index}
                    className={`mr-2 py-2 px-4 rounded ${
                      selectedTab === meaning.partOfSpeech
                        ? 'bg-textDark text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => handleTabChange(meaning.partOfSpeech)}
                  >
                    {meaning.partOfSpeech}
                  </button>
                ))}
              </div>
              <article className="p-5">
                {dictionary.meanings.map((meaning, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      selectedTab === meaning.partOfSpeech ? '' : 'hidden'
                    }`}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {meaning.partOfSpeech}
                    </h3>
                    <ul className="list-decimal list-inside">
                      {meaning.definitions.map((definition, index) => (
                        <li key={index} className="mb-2">
                          {definition.definition}

                          {definition.example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            </div>
          </div>
        ) : (
          <p className="mt-2 text-textDark">
            Enter a word to search. (press Enter to see the results)
          </p>
        )}
      </div>
    </>
  );
};

export default Search;
