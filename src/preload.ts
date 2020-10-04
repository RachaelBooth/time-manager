import { contextBridge, ipcRenderer } from 'electron';

console.log('preload');

// qq types
// qq better interface?
contextBridge.exposeInMainWorld(
    "api", {
        invoke: async (channel: string, data: any): Promise<any> => {
            return await ipcRenderer.invoke(channel, data);
        }
    }
)