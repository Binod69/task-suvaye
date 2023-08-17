'use client';
import React, { useState } from 'react';
import { search } from '../../public';
import Image from 'next/image';

interface DictionaryResponse {
  word: string;
  meanings: {
    partOfSpeech: string;
    definitions: { definition: string; example: string }[];
  }[];
}

const baseURL = process.env.NEXT_PUBLIC_API;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [dictionaryData, setDictionaryData] =
    useState<DictionaryResponse | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>('noun');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    if (!searchTerm) return;

    try {
      const response = await fetch(`${baseURL}/${searchTerm}`);
      const data = await response.json();
      setDictionaryData(data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    setSuggestions([]);

    if (value.trim() !== '') {
      // setIsLoading(true);
      const simulatedSuggestions = ['apple', 'banana', 'cherry', 'date'];
      setSuggestions(simulatedSuggestions);
    } else {
      // setIsLoading(false);
    }
  };
  const handleInputDelete = () => {
    setSearchTerm('');
    setDictionaryData(null);
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
          value={searchTerm}
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

        {dictionaryData ? (
          <div className=" my-10">
            <h2 className="text-2xl font-bold mb-4 sm:text-center lg:text-start">
              Word: {dictionaryData.word}
            </h2>
            <div className="border rounded-cardRadius">
              <div className="flex  p-5">
                {dictionaryData.meanings.map((meaning, index) => (
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
                {dictionaryData.meanings.map((meaning, index) => (
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
          <p className="mt-2 text-gray-600">
            Enter a word to search for definitions. (press Enter to see the
            results)
          </p>
        )}
      </div>
    </>
  );
};

export default Search;
