import React, { useReducer, useCallback } from "react";
import CacheContext from './cacheContext';
import cacheReducer from './cacheReducer';
import * as cacheTypes from './cache-types';
function KeepAliveProvider(props) {
    let [cacheStates, dispatch] = useReducer(cacheReducer, {});
    const mount = useCallback(({ cacheId, reactElement }) => {
        if (!cacheStates[cacheId]) {
            dispatch({ type: cacheTypes.CREATE, payload: { cacheId, reactElement } });
        }
    }, [cacheStates]);
    return (
        <CacheContext.Provider value={{ mount, cacheStates, dispatch }}>
            {props.children}
            {Object.values(cacheStates).map(({ cacheId, reactElement }) => (
                <div
                    id={`cache_${cacheId}`}
                    key={cacheId}
                    ref={(divDom) => {
                        let cacheState = cacheStates[cacheId];
                        if (divDom && (!cacheState.doms)) {
                            let doms = Array.from(divDom.childNodes);
                            // console.log(doms)
                            dispatch({ type: cacheTypes.CREATED, payload: { cacheId, doms } });
                        }
                    }}
                >{reactElement}</div>
            ))}
        </CacheContext.Provider>
    );
}
export default KeepAliveProvider;