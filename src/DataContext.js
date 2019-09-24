import { createContext } from 'react';

const DataContext = createContext({ data: [], title: '', handleUpdate: () => { } });

const DataProvider = DataContext.Provider;

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer, DataContext as default };

