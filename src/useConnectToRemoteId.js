import {useState,useEffect} from './react-deps'
export default params => {
  const {peer,remoteKey,handleData,handleConnected,metadata,reliable} = params;

  const [connected,   setConnected] = useState(false);
  const [connecting,  setConnecting] = useState(false);
  const [connection,  setConnection] = useState();

  const connect = ()=>{
    setConnecting(true);
    let conn = peer.connect(remoteKey,{metadata,reliable})

    setConnection(conn)
    if(conn){
      conn.on('open',()=>{
        setConnecting(false);
        setConnected(true)
        handleConnected && handleConnected(conn)
      })

      conn.on('error',arg=>{
        console.log('error',arg)
        setConnecting(false);
        setConnected(false)
      })

      conn.on('close',arg=>{
        console.log('closed',arg)
        setConnecting(false);
        setConnected(false)
      })

      conn.on('disconnected',(arg)=>{
        console.log('disconnected',arg)
        setConnecting(false);
        setConnected(false)
      })
    }
  }

  return [
    connect,
    connected,
    connecting,
    connection
  ]
}
