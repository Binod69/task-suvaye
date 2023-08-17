import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Definition {
  partOfSpeech: string;
  definition: string;
  audioUrl: string;
}

interface DictionaryContextType {
  definitions: Definition[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  setDefinitions: (definitions: Definition[]) => void;
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(
  undefined
);

export const useDictionaryContext = () => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error(
      'useDictionaryContext must be used within a DictionaryProvider'
    );
  }
  return context;
};

interface DictionaryProviderProps {
  children: ReactNode;
}

export const DictionaryProvider: React.FC<DictionaryProviderProps> = ({
  children,
}) => {
  const [definitions, setDefinitions] = useState<Definition[]>([]);
  const [selectedTab, setSelectedTab] = useState('noun');

  const contextValue = {
    definitions,
    selectedTab,
    setSelectedTab,
    setDefinitions,
  };

  return (
    <DictionaryContext.Provider value={contextValue}>
      {children}
    </DictionaryContext.Provider>
  );
};
