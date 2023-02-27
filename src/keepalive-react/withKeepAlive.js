import React, { useContext, useRef, useEffect } from "react";
import CacheContext from './cacheContext';
// import * as cacheTypes from './cache-types';
// /**
//  * 
//  * @param {*} OldComponent 
//  * @param {*} cacheID 
//  * @returns 
//  * @description 通过缓存容器去创建OldComponent 对应的真实dom,并进行缓存
//  * 即使OldComponent 被销毁后，扔能找回
//  */


function withKeepAlive(OldComponent, { cacheId = window.location.pathname, scroll = false }) {
    return function (props) {
        const { mount, cacheStates, dispatch,  handleScroll } = useContext(CacheContext);
        const ref = useRef(null);
        useEffect(() => {
            let cacheState = cacheStates[cacheId];
            if (cacheState && cacheState.doms) {
                let doms = cacheState.doms;
                doms.forEach(dom=>ref.current.appendChild(dom));
                if(scroll){
                   doms.forEach(dom=>{
                       if (cacheState.scrolls[dom])
                         dom.scrollTop = cacheState.scrolls[dom];
                   });
                  }
            } else {
                mount({ cacheId, reactElement: <OldComponent {...props} /> })
            }
        }, [cacheStates, dispatch, mount, props]);
        useEffect(()=>{
            if(scroll){
                ref.current.addEventListener('scroll', handleScroll.bind(null, cacheId),true);
            }
        },[handleScroll]);
        return <div id={`keepalive_${cacheId}`} ref={ref} />;
    }
}
export default withKeepAlive;