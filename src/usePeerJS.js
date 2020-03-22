import {useState,useEffect} from './react-deps'

import Peer from 'peerjs'


export default params => {

  const {config, handleData,handleOpen,handleRemotePeerConnection,handleCall,handleError} = params;

  const {host,port, path, key,debug} =serverConf;

  const [connected,setConnected] = useState(false)
  const [connecting,setConnecting] = useState(false)
  const [id,setId] = useState()
  const [peerJSInstance,setPeerJSInstance] = useState()

  useEffect(()=>{
      const _peer=new Peer({host, port, path,debug,key});
      setConnecting(true)
      _peer.on('open', (id)=> {
        setId(id)
        setConnected(true)
        setConnecting(false)

        handleOpen && handleOpen(id)
      });

      _peer.on('call', call=>{
        handleCall&& handleCall(call)
      });

      _peer.on('connection', (conn) => {
        handleRemotePeerConnection&& handleRemotePeerConnection(conn)
      });

      _peer.on('error',(arg)=>{
  //      setConnected(false)
//        setConnecting(false)
        handleError && handleError(arg)
        setConnected(!_peer.disconnected)
        console.log('PEERJS_ERROR',arg)
      } )

      setPeerJSInstance(_peer)

  },[])
  return [
    peerJSInstance,
    id,
    connected,
    connecting
  ]
}
