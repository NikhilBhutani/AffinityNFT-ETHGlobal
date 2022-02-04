import { Button, Input} from "antd";
import Text from "antd/lib/typography/Text";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import  { Moralis } from 'moralis';
//const web3 = new Web3(window.ethereum);


const styles = {
    card: {
      alignItems: "center",
      width: "50%",
    },
    header: {
      textAlign: "center",
    },
    input: {
      width: "100%",
      outline: "none",
      fontSize: "16px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textverflow: "ellipsis",
      appearance: "textfield",
      color: "#041836",
      fontWeight: "700",
      border: "none",
      backgroundColor: "transparent",
    },
    select: {
      marginTop: "20px",
      display: "flex",
      alignItems: "center",
    },
    textWrapper: { maxWidth: "80px", width: "100%" },
    row: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexDirection: "row",
    },
  };

function PartA() {
    //const { Moralis } = useMoralis();
    const API_URL = 'https://s3nlldgkmodi.usemoralis.com:2053/server';
    const API_KEY = 'cOep3uCa15236HwUfmeHmvLtTiNBy3t2ePpveLsk';
    var globalUser;
    var selectedFile;
    var fileName;

    // const [receiver, setReceiver] = useState();
    // const [asset, setAsset] = useState();
    // const [tx, setTx] = useState();
    // const [amount, setAmount] = useState();
    // const [isPending, setIsPending] = useState(false);
  
    // useEffect(() => {
    //   asset && amount && receiver ? setTx({ amount, receiver, asset }) : setTx();
    // }, [asset, amount, receiver]);

    async function startMoralisAndLogin(){
     await Moralis.start({ serverUrl: API_URL, appId: API_KEY });
   
     const currentUser = Moralis.User.current();
         if (currentUser) {
            console.log("User alredy logged in")
            console.log(currentUser.get('ethAddress'))
            globalUser = currentUser;
           } else {
            Moralis.authenticate().then(user =>{
              console.log(user.get('ethAddress'))
              globalUser = user
            })
           }
    }
  // Polygon, Moralis, NFT functionality for creator and viwers, If we dao 

 
  const onFileChange = event => {
    selectedFile = event.target.files[0];
    console.log(selectedFile)
    fileName = selectedFile.name;     
   }

    async function mintMyNFT() {
      await Moralis.start({ serverUrl: API_URL, appId: API_KEY });
   
      console.log("SelectedFIle"+selectedFile);
      console.log("File Name"+fileName);
      const file = new Moralis.File(fileName, selectedFile);
      console.log("Uploading file... ")
      await file.saveIPFS();
      console.log(file.ipfs(), file.hash())

      

    }

    async function connectContract(_uri){
      const encodedFunction = web3.eth.abi.encodedFunction({
        name: "mintToken",
        type: "function",
        inputs: [{
          type: "string",
          name: "tokenURI"
        }]
      })
    }
  
    return (
      <div style={styles.card}>
        <div style={styles.tranfer}>
          <div style={styles.header}>
            <h3>Mint Creator NFT</h3>
          </div>
          <div style={styles.select}>
            <div style={styles.textWrapper}>
              <Text strong>Channel Name:</Text>
            </div>
            <Input
              size="large"
            //   prefix={<CreditCardOutlined />}
              onChange={(e) => {
                console.log(e)
              //  setAmount(`${e.target.value}`);
              }}
            />
          </div>
          <div style={styles.select}>
            <div style={styles.textWrapper}>
              <Text strong>Description:</Text>
            </div>
            <Input
              size="large"
            //   prefix={<CreditCardOutlined />}
              onChange={(e) => {
              //  setAmount(`${e.target.value}`);
              }}
            />
          </div>
          <div class="input-group mb-3">
            <input type="file" onChange={onFileChange} onClick={(event)=> { 
               event.target.value = null
          }} id="file"/>
              
          </div>
          
         
          <Button
            type="primary"
            size="large"
          //  loading={isPending}
            style={{ width: "50%", marginTop: "25px" }}
            onClick={() => startMoralisAndLogin()}
          //  disabled={!tx}
          >
            Login User
          </Button>

          <Button
            type="primary"
            size="large"
          //  loading={isPending}
            style={{ width: "50%", marginTop: "25px" }}
            onClick={() => mintMyNFT()}
          //  disabled={!tx}
          >
            Upload NFT 💸
          </Button>
        </div>
      </div>
    );
  }
  
export default PartA;
