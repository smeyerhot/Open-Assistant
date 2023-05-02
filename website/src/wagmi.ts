import { createClient, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
 
const { provider } = configureChains([mainnet], [publicProvider()])
 
export const client = createClient({
  autoConnect: true,
  provider,
})