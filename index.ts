import { Keypair, Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

// Create Wallet
const wallet = Keypair.generate();

// Create publickey
const publickey = new PublicKey(wallet.publicKey);

// create lamport
const lamport = LAMPORTS_PER_SOL

// Create Connection
const connection = new Connection("http://127.0.0.1:8899", "confirmed");

// Get balance in wallet associated to public address (pubkey)
const getBalanceInWallet = async () => {
    const walletBalance = await connection.getBalance(publickey)
    // Converting lamport to sol
    const sol = walletBalance / lamport;
    console.log(`Wallet Balance: ${sol} sol`);
}

// Drop balance to the wallet
const airDropSol = async () => {
    const airDropSignature = await connection.requestAirdrop(publickey, lamport);
    await connection.confirmTransaction(airDropSignature);
}

const main = async () => {
    await getBalanceInWallet();
    await airDropSol()
    await getBalanceInWallet();
}

main();
