// contexts/WordContext.ts
import { createContext, useContext, useState, ReactNode } from 'react';

interface WordContextType {
  selectedWord: string | null;
  setSelectedWord: (word: string | null) => void;
}

const WordContext = createContext(null);

export function useWordContext() {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error('useWordContext must be used within a WordProvider');
  }
  return context;
}

interface WordProviderProps {
  children: ReactNode;
}

export function WordProvider({ children }: WordProviderProps) {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const contextValue: WordContextType = {
    selectedWord,
    setSelectedWord,
  };

  return (
    <WordContext.Provider value={contextValue}>{children}</WordContext.Provider>
  );
}
