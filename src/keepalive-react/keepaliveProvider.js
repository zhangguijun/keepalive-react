import React, { Component, useReducer } from 'react'
import cacheReducer from './cacheReducer';
import CacheContext from './cacheContext';

const KeepAliveProvider = (props) => {
    const [cacheStates, dispatch] = useReducer(cacheReducer, {})

    return (
        <CacheContext.Provider value={{
            cacheStates, dispatch
        }}>
            {props.children}
        </CacheContext.Provider>
    )
}

export default KeepAliveProvider;