import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import ZcElement from '../../../core/index'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ZcElement)
  }
}