import { Button, Input} from "antd";
import Text from "antd/lib/typography/Text";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

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
    // const { Moralis } = useMoralis();
    // const [receiver, setReceiver] = useState();
    // const [asset, setAsset] = useState();
    // const [tx, setTx] = useState();
    // const [amount, setAmount] = useState();
    // const [isPending, setIsPending] = useState(false);
  
    // useEffect(() => {
    //   asset && amount && receiver ? setTx({ amount, receiver, asset }) : setTx();
    // }, [asset, amount, receiver]);
  
    async function transfer() {
      
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
         
          <Button
            type="primary"
            size="large"
          //  loading={isPending}
            style={{ width: "50%", marginTop: "25px" }}
            onClick={() => transfer()}
          //  disabled={!tx}
          >
            Lets Get Started💸
          </Button>
        </div>
      </div>
    );
  }
  
export default PartA;
