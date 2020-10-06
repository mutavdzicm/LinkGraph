import {createContext, useState} from 'react';

export const TabContext = createContext();

function TabProvider({children}) {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <TabContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}
export default TabProvider;
