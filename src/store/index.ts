import { configureStore } from '@reduxjs/toolkit'
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import { rootReducer } from './rootReducers'

const store = configureStore({
	reducer: rootReducer,
	devTools: import.meta.env.MODE !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

const persistor = persistStore(store)

export { store, persistor }