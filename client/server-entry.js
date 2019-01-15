import React from 'react'
import { Provider, useStaticRendering } from 'mobx-react'
import { StaticRouter } from 'react-router-dom'
import App from './views/App'
import { createStoreMap } from './store/store'

// 让mobx在服务器渲染的时候不会重复数据变换
useStaticRendering(true)


export default (stores, routerContext, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
)
export { createStoreMap }
