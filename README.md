# paradigm-ctf 2021

[Paradigm CTF 2021](https://ctf.paradigm.xyz/).

Cloned from [https://github.com/MrToph/paradigm-ctf](https://github.com/MrToph/paradigm-ctf) as a setup, I just try to solve challanges

Solved Challenges:

- [x] [Hello](./test/hello.ts)


# Running challenges

Most challenges can be run in a local _hardhat_ environment by forking mainnet and deploying the setup contract.
Challenges are implemented as hardhat tests in [`/test`](./test).

To fork the mainnet, you need an archive URL like the free ones from [Alchemy](https://alchemyapi.io/).

## Development

```bash
npm i
```

Remember to configure environment variable in .env: ARCHIVE_URL=https://eth-mainnet.alchemyapi.io/v2/...

```bash
# run challenge farmer
npx hardhat test test/farmer.ts
```
