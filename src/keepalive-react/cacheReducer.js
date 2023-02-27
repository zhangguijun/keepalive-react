
/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
import * as cacheTypes from './cache-types';
function cacheReducer(cacheStatus, action) {
    let payload = action.payload;
    // let cacheId = payload.cacheId
    switch (action.type) {
        case cacheTypes.CREATE:
            return {
                ...cacheStatus,
                [payload.cacheId]: {
                    cacheId: payload.cacheId,
                    doms: undefined, // 虚拟dom 对应真是dom
                    reactElement: payload.reactElement, // 要渲染的虚拟dom
                    status: cacheTypes.CREATE, // 状态是创建中
                }
            }
        case cacheTypes.CREATED:
                return {
                   ...cacheStatus,
                    [payload.cacheId]: {
                        ...cacheStatus[payload.cacheId],
                        doms: payload.doms, // 虚拟dom 对应真是dom
                        status: cacheTypes.CREATED, // 状态是创建中
                    }
                }
    
        default:
            break;
    }
}

export default cacheReducer