import { usePluginIDContext } from './Context'
import { useActivatedPluginWeb3State } from '../hooks/useActivatedPluginWeb3State'

export function useWeb3State(expectedPluginID?: string) {
    const pluginID = usePluginIDContext()
    const web3State = useActivatedPluginWeb3State(expectedPluginID ?? pluginID)
    if (!web3State) throw new Error('Failed to locate web3 state.')
    return web3State
}
