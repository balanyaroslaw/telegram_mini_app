import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { walletStore } from './store/wallet.store.ts'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider
          manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
          language="en"
          uiPreferences={{ theme: 'SYSTEM' }}>
        <Provider store={walletStore}>
          <App />
        </Provider>,
      </TonConnectUIProvider>
  </StrictMode>,
)
