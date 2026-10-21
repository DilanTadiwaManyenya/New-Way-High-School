import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Site } from './App'
export function render(path) {
  return renderToString(<StaticRouter location={path}><Site /></StaticRouter>)
}
