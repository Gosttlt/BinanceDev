/** @format */

import { LowerSymbolType } from 'Store/StockGlassReducer/types'

type DataType = string[] | number[]
type CbType = { asks: number[][]; bids: number[][] }
type CbDataType = { a: DataType[]; b: DataType[] }

let ws: WebSocket | null = null

const messageHandler = (e: MessageEvent, cb?: (data: CbType) => void) => {
  const data = JSON.parse(e.data) as CbDataType
  let asks = data.a
    .filter((a: DataType) => +a[1] !== 0)
    .map(a => ([a[0], a[1]] = [+a[0], +a[1]]))
  let bids = data.b
    .filter((b: DataType) => +b[1] !== 0)
    .map((b: DataType) => ([b[0], b[1]] = [+b[0], +b[1]]))
  const arr = {
    asks: asks,
    bids: bids,
  } as CbType

  if (cb) {
    cb(arr)
  }
}

const wsApi = {
  createWs: (symbol: LowerSymbolType): WebSocket => {
    ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@depth`)
    return ws
  },
  subscribe: async (ws: WebSocket | null, cb: () => void) => {
    await ws?.addEventListener('message', e => messageHandler(e, cb))
  },
  closeWs: async () => {
    await ws?.removeEventListener('message', messageHandler)
    await ws?.close(1000, 'closeWs')
  },
}

export default wsApi
