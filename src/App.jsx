import './App.css';
import { TonConnectButton,useTonAddress } from '@tonconnect/ui-react';

import { Unity, useUnityContext } from "react-unity-webgl";





function App() {

  const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);
  //  RegisterExternalListener("OpenMenu", this.openMenu.bind(this));


  
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "assets/tonjtest3.loader.js",
    dataUrl: "assets/tonjtest3.data",
    frameworkUrl: "assets/tonjtest3.framework.js",
    codeUrl: "assets/tonjtest3.wasm",
  });

  function handleClickSpawnEnemies() {
    sendMessage("react-object", "GetWallet", userFriendlyAddress);
  }


  

  const checkUserFriendlyAddress = () => {
    if (userFriendlyAddress === null || userFriendlyAddress === "") {
      console.log('userFriendlyAddress jest null');


      // Tutaj możesz umieścić kod do obsługi, gdy userFriendlyAddress jest null
    } 
    if (userFriendlyAddress !== null && userFriendlyAddress !== "") {

      console.log('userFriendlyAddress nie jest null. Wyłączam przycisk.');
      handleClickSpawnEnemies();
      // Tutaj możesz umieścić kod do obsługi, gdy userFriendlyAddress nie jest null
    }
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
     // height: '100vh',
    

  };
  

  const buttonStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
  };
  

  // useTonAddress();

   handleClickSpawnEnemies();
  return (
    
    
    <div style={containerStyle}>

  

{userFriendlyAddress == null || userFriendlyAddress === "" &&   <button style={buttonStyle}> <TonConnectButton /></button> }



           <Unity 
           style={{
            width:"80vw",
            height:"80vh",
            overflow: 'hidden',
           }}
           unityProvider={unityProvider} 
           />

   

    

    </div>
  );
  
}


export default App
