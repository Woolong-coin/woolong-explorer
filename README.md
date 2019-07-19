# Woolong-Blockchain-Explorer
Block explorer for Woolong CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon Woolongd. It should be accessible from the Internet. Run Woolongd with open port as follows:
```bash
./Woolongd --enable-cors="*" --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.


### Development
Donate: [WOO] `WwaFjmWQrNG1h1bSVcP8UjKYL1nHRHp5sGVVSX9pZmtFjfPFfBi4XoJCWewvjXU4gxGmuiNpZSBLd4sgRWnusrNS15x8facrx`

### Note

A lot of this code is from the great Karbovanets/Karbowanec-Blockchain-Explorer
