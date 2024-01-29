import './App.css';
import { TonConnectButton,useTonAddress } from '@tonconnect/ui-react';

import { Unity, useUnityContext } from "react-unity-webgl";





function App() {

  const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);
  //  RegisterExternalListener("OpenMenu", this.openMenu.bind(this));


  
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "build/tonjtest.loader.js",
    dataUrl: "build/tonjtest.data",
    frameworkUrl: "build/tonjtest.framework.js",
    codeUrl: "build/tonjtest.wasm",
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
    height: '100vh',
  };
  

  // useTonAddress();

   handleClickSpawnEnemies();
  return (
    
    
    <div style={containerStyle}>

  

{userFriendlyAddress == null || userFriendlyAddress === "" && <TonConnectButton /> }



           <Unity 
           style={{
            width:"360px",
            height:"640px",
           }}
           unityProvider={unityProvider} 
           />

   

    

    </div>
  );
  
}


export default App
