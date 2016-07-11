/**
 * Created by tanjiasheng on 2016/7/11.
 */
export default [
        { path: '/',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./index/index').default)
                })
            }
        },
        { path: '/test',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./testApp/testApp').default)
                })
            }
        },
        { path: '/test1',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./testApp2/test').default)
                })
            }
        },
]