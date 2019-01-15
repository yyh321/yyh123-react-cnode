import React from 'react'
import { Provider, useStaticRendering } from 'mobx-react'
import { StaticRouter } from 'react-router-dom'
import { JssProvider } from 'react-jss'
import { MuiThemeProvider } from '@material-ui/core/styles'
import App from './views/App'
import { createStoreMap } from './store/store'

// 让mobx在服务器渲染的时候不会重复数据变换
useStaticRendering(true)


export default (stores, routerContext, sheetsRegistry, generateClassName, theme,
  sheetsManager, url) => (
    <Provider {...stores}>
      <StaticRouter context={routerContext} location={url}>
        <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
            <App />
          </MuiThemeProvider>
        </JssProvider>
      </StaticRouter>
    </Provider>
)
export { createStoreMap }
