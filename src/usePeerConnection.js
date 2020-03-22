import {useState,useEffect} from './react-deps'

export default params => {
  const {remotePeer,handleData,handleDisconnect,handleClose,handleError} = params;

  const [connection,setConnection] = useState();

  useEffect(()=>{
    setConnection(remotePeer);
    remotePeer.on('error',(arg)=>{
      handleError && handleError(arg)
    })

    remotePeer.on('data',(arg)=>{
      handleData && handleData(arg)
    })

    remotePeer.on('close',(arg)=>{
      handleClose && handleClose(arg)

    })
    remotePeer.on('disconnected',(arg)=>{
      handleDisconnect && handleDisconnect(arg)
    })
  },[])

  return [
   remotePeer.send.bind(remotePeer),
   remotePeer.call
  ]
}
