# Solana AirDrop using @solana/web3.js

## To Get Started

> ### _Install Rust_

    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

> ### _Install Solana_
>
> See the solana docs for installation instructions. On macOS and Linux,

    sh -c "$(curl -sSfL https://release.solana.com/v1.10.10/install)"

> ### _Install Yarn_

    npm install -g yarn

> _Clone Repo_

    git clone https://github.com/avatarfreak/solana-airdrop.git

> _Change Directory_

    cd solana-airdrop

> _Install additional dependencies_

    yarn install

## Starting a Localnet

> _If you're running solana for the first time, generate a wallet._

    solana-keygen new

> To start Local network. local network start at `http://127.0.0.1:8899`

    solana-test-validator

## `Important`

> _This is airdrop is solely focused on the ***`local network`***. To be on ***`devnet`*** or ***`mainet`***. The configuration for the connection._

- local network
  > `new Connection("http://127.0.0.1:8899", "confirmed")`
- Devnet
  > `new Connection(clusterApiUrl("devnet"), 'confirmed')`
- mainet (_At the time of writing_)

  > `new Connection(clusterApiUrl("mainnet-beta"), 'confirmed')`

---

### **_*Run in terminal*_**

> - <font color="orange">**_In first terminal_**</font>

        npx ts-node index.ts

> - <font color="orange">**_In second terminal_**</font>

         solana-test-validator

### Authors

author: [avatarfreak ](https://github.com/avatarfreak)
