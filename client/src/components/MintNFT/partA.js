import { Button, Input} from "antd";
import Text from "antd/lib/typography/Text";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import  { Moralis } from 'moralis';
import {any} from '../../../src/abi/CreatorNFT.json'
const ethers = require('ethers');

// Import the json file from build to get the abi
const contractJson = require('../../../src/abi/CreatorNFT.json');
const contractAddressJson = require('../../../src/abi/contract-address.json');
const contractAbi = contractJson.abi
const contractAddress = contractAddressJson.CreatorNFT 

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

    async function uploadDataAndMintNFT() {
      await Moralis.start({ serverUrl: API_URL, appId: API_KEY });
   
      console.log("SelectedFIle"+selectedFile);
      console.log("File Name"+fileName);
      const file = new Moralis.File(fileName, selectedFile);
      console.log("Uploading file... ")
      await file.saveIPFS();
      console.log(file.ipfs(), file.hash())

      const imageURI = file.ipfs();

      const metadata = {
        "channel_name": "AffinityCreator",
        "description": "We are different videos regarding building creator contracts",
        "image":imageURI
      }
      const metadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
      await metadataFile.saveIPFS();
      const metadataURI = metadataFile.ipfs();

     // console.log("Metadata URI"+metadataURI)
     // console.log(JSON.stringify(contractAbi))

      await mintToken(metadataURI)  
    }

    async function mintToken(_uri){
      console.log("Metadata URI "+_uri)
      const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      const txt = await contract.mintToken(_uri)
      
      console.log("Minted Token "+Object.keys(txt))
    }

    async function getNFTOfOwner(){
   
       // get polygon NFTs for address
        // const options = { chain: 'mumbai', address: '0x6e844c3f3a83748df2af51237506554f7adac85a' };
        // const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);
        // console.log("Polygon NFT "+polygonNFTs.total);
      const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      const address = await signer.getAddress()
      console.log("Signer "+address);
       const uri = await contract.getTokenURI(address);
       const res = await fetch(uri)
       const json = await res.json()
      console.log(+json['channel_name'])
        

      // .then(response => 
      //    console.log("Im here");
      //   response.json()
      //   ).then(data => console.log("sadasd",data));
      //console.log(Json.parse(uri));
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
            onClick={() => uploadDataAndMintNFT()}
          //  disabled={!tx}
          >
            Upload NFT 💸
          </Button>
          <Button
            type="primary"
            size="large"
          //  loading={isPending}
            style={{ width: "50%", marginTop: "25px" }}
            onClick={() => getNFTOfOwner()}
          //  disabled={!tx}
          >
            Get NFT Of Owner 💸
          </Button>
        </div>
      </div>
    );
  }
  
export default PartA;
