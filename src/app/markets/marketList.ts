const marketList = [
  {
    exchangeName: "Bitfinex",
    tradingPairs: 16,
    dailyVolumeUSD: "$2,694,231,860",
    dailyVolumeBTC: "266,550"
  },
  {
    exchangeName: "coinone",
    tradingPairs: 6,
    dailyVolumeUSD: "$1,203,231,572",
    dailyVolumeBTC: "119,040"
  },
  {
    exchangeName: "Coinbase GDAX",
    tradingPairs: 12,
    dailyVolumeUSD: "$916,703,486",
    dailyVolumeBTC: "90,693"
  },
  {
    exchangeName: "Kraken",
    tradingPairs: 47,
    dailyVolumeUSD: "$835,345,268",
    dailyVolumeBTC: "82,644"
  },
  {
    exchangeName: "Bitstamp",
    tradingPairs: 11,
    dailyVolumeUSD: "$803,727,491",
    dailyVolumeBTC: "79,516"
  },
  {
    exchangeName: "Bithumb",
    tradingPairs: 11,
    dailyVolumeUSD: "$289,828,280",
    dailyVolumeBTC: "28,674"
  },
  {
    exchangeName: "Bittrex",
    tradingPairs: 255,
    dailyVolumeUSD: "$255,736,115",
    dailyVolumeBTC: "25,301"
  },
  {
    exchangeName: "Gemini",
    tradingPairs: 3,
    dailyVolumeUSD: "$245,828,862",
    dailyVolumeBTC: "24,321"
  },
  {
    exchangeName: "Poloniex",
    tradingPairs: 97,
    dailyVolumeUSD: "$233,393,044",
    dailyVolumeBTC: "23,090"
  },
  {
    exchangeName: "HitBTC",
    tradingPairs: 272,
    dailyVolumeUSD: "$214,910,746",
    dailyVolumeBTC: "21,262"
  },
  {
    exchangeName: "Quoine",
    tradingPairs: 28,
    dailyVolumeUSD: "$196,568,642",
    dailyVolumeBTC: "19,447"
  },
  {
    exchangeName: "BTC-e / WEX",
    tradingPairs: 26,
    dailyVolumeUSD: "$184,052,872",
    dailyVolumeBTC: "18,209"
  },
  {
    exchangeName: "bitFlyer",
    tradingPairs: 3,
    dailyVolumeUSD: "$165,701,267",
    dailyVolumeBTC: "16,393"
  },
  {
    exchangeName: "CEX.IO",
    tradingPairs: 28,
    dailyVolumeUSD: "$88,018,545",
    dailyVolumeBTC: "8,708"
  },
  {
    exchangeName: "Korbit",
    tradingPairs: 4,
    dailyVolumeUSD: "$77,592,460",
    dailyVolumeBTC: "7,677"
  },
  {
    exchangeName: "EXMO",
    tradingPairs: 39,
    dailyVolumeUSD: "$74,366,659",
    dailyVolumeBTC: "7,357"
  },
  {
    exchangeName: "Binance",
    tradingPairs: 7,
    dailyVolumeUSD: "$54,898,346",
    dailyVolumeBTC: "5,431"
  },
  {
    exchangeName: "Vaultoro",
    tradingPairs: 1,
    dailyVolumeUSD: "$49,392,834",
    dailyVolumeBTC: "4,887"
  },
  {
    exchangeName: "EXX",
    tradingPairs: 35,
    dailyVolumeUSD: "$43,592,175",
    dailyVolumeBTC: "4,313"
  },
  {
    exchangeName: "Liqui",
    tradingPairs: 169,
    dailyVolumeUSD: "$34,459,381",
    dailyVolumeBTC: "3,409"
  },
  {
    exchangeName: "Bitcoin Indonesia",
    tradingPairs: 20,
    dailyVolumeUSD: "$33,633,675",
    dailyVolumeBTC: "3,328"
  },
  {
    exchangeName: "LakeBTC",
    tradingPairs: 8,
    dailyVolumeUSD: "$33,100,894",
    dailyVolumeBTC: "3,275"
  },
  {
    exchangeName: "itBit",
    tradingPairs: 3,
    dailyVolumeUSD: "$32,216,462",
    dailyVolumeBTC: "3,187"
  },
  {
    exchangeName: "Tidex",
    tradingPairs: 58,
    dailyVolumeUSD: "$25,986,727",
    dailyVolumeBTC: "2,571"
  },
  {
    exchangeName: "Livecoin",
    tradingPairs: 311,
    dailyVolumeUSD: "$25,154,654",
    dailyVolumeBTC: "2,489"
  },
  {
    exchangeName: "QuadrigaCX",
    tradingPairs: 9,
    dailyVolumeUSD: "$23,261,768",
    dailyVolumeBTC: "2,301"
  },
  {
    exchangeName: "BTC Markets",
    tradingPairs: 8,
    dailyVolumeUSD: "$23,023,325",
    dailyVolumeBTC: "2,278"
  },
  {
    exchangeName: "Cryptopia",
    tradingPairs: 440,
    dailyVolumeUSD: "$17,785,063",
    dailyVolumeBTC: "1,760"
  },
  {
    exchangeName: "Gate.io",
    tradingPairs: 129,
    dailyVolumeUSD: "$13,923,280",
    dailyVolumeBTC: "1,377"
  },
  {
    exchangeName: "Kucoin",
    tradingPairs: 100,
    dailyVolumeUSD: "$11,954,080",
    dailyVolumeBTC: "1,183"
  },
  {
    exchangeName: "YoBit",
    tradingPairs: 9,
    dailyVolumeUSD: "$11,840,368",
    dailyVolumeBTC: "1,171"
  },
  {
    exchangeName: "LocalBitcoins",
    tradingPairs: 35,
    dailyVolumeUSD: "$10,125,076",
    dailyVolumeBTC: "1,002"
  },
  {
    exchangeName: "BitX South Africa",
    tradingPairs: 4,
    dailyVolumeUSD: "$9,425,920",
    dailyVolumeBTC: "933"
  },
  {
    exchangeName: "BTC-Alpha",
    tradingPairs: 23,
    dailyVolumeUSD: "$6,327,376",
    dailyVolumeBTC: "626"
  },
  {
    exchangeName: "Coinfloor",
    tradingPairs: 4,
    dailyVolumeUSD: "$6,309,182",
    dailyVolumeBTC: "624"
  },
  {
    exchangeName: "ACX",
    tradingPairs: 6,
    dailyVolumeUSD: "$4,905,109",
    dailyVolumeBTC: "485"
  },
  {
    exchangeName: "OKCoin",
    tradingPairs: 5,
    dailyVolumeUSD: "$3,927,686",
    dailyVolumeBTC: "389"
  },
  {
    exchangeName: "Allcoin",
    tradingPairs: 14,
    dailyVolumeUSD: "$3,872,800",
    dailyVolumeBTC: "383"
  },
  {
    exchangeName: "CoinMate",
    tradingPairs: 2,
    dailyVolumeUSD: "$3,558,145",
    dailyVolumeBTC: "352"
  },
  {
    exchangeName: "The Rock Trading",
    tradingPairs: 12,
    dailyVolumeUSD: "$2,426,274",
    dailyVolumeBTC: "240"
  },
  {
    exchangeName: "Abucoins",
    tradingPairs: 33,
    dailyVolumeUSD: "$1,405,185",
    dailyVolumeBTC: "139"
  },
  {
    exchangeName: "Bleutrade",
    tradingPairs: 95,
    dailyVolumeUSD: "$780,928",
    dailyVolumeBTC: "77"
  },
  {
    exchangeName: "C-Cex",
    tradingPairs: 247,
    dailyVolumeUSD: "$691,575",
    dailyVolumeBTC: "68"
  },
  {
    exchangeName: "IDEX",
    tradingPairs: 35,
    dailyVolumeUSD: "$522,775",
    dailyVolumeBTC: "52"
  },
  {
    exchangeName: "Bitso",
    tradingPairs: 4,
    dailyVolumeUSD: "$518,125",
    dailyVolumeBTC: "51"
  },
  {
    exchangeName: "Paymium",
    tradingPairs: 1,
    dailyVolumeUSD: "$373,281",
    dailyVolumeBTC: "37"
  },
  {
    exchangeName: "Gatecoin",
    tradingPairs: 18,
    dailyVolumeUSD: "$313,139",
    dailyVolumeBTC: "31"
  },
  {
    exchangeName: "BTCC",
    tradingPairs: 1,
    dailyVolumeUSD: "$277,560",
    dailyVolumeBTC: "27"
  },
  {
    exchangeName: "Coinsecure",
    tradingPairs: 1,
    dailyVolumeUSD: "$211,253",
    dailyVolumeBTC: "21"
  },
  {
    exchangeName: "Bitcoins Norway",
    tradingPairs: 4,
    dailyVolumeUSD: "$198,517",
    dailyVolumeBTC: "20"
  },
  {
    exchangeName: "VirWox",
    tradingPairs: 1,
    dailyVolumeUSD: "$170,822",
    dailyVolumeBTC: "17"
  },
  {
    exchangeName: "Bitkonan",
    tradingPairs: 2,
    dailyVolumeUSD: "$42,655",
    dailyVolumeBTC: "4"
  },
  {
    exchangeName: "CryptoX",
    tradingPairs: 6,
    dailyVolumeUSD: "$30,323",
    dailyVolumeBTC: "3"
  },
  {
    exchangeName: "FlowBTC",
    tradingPairs: 3,
    dailyVolumeUSD: "$29,009",
    dailyVolumeBTC: "3"
  },
  {
    exchangeName: "TradeSatoshi",
    tradingPairs: 5,
    dailyVolumeUSD: "$22,237",
    dailyVolumeBTC: "2"
  },
  {
    exchangeName: "go4cryptos",
    tradingPairs: 3,
    dailyVolumeUSD: "$5,054",
    dailyVolumeBTC: "1"
  },
  {
    exchangeName: "Cryptonit",
    tradingPairs: 3,
    dailyVolumeUSD: "$3,538",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "Vircurex",
    tradingPairs: 7,
    dailyVolumeUSD: "$2,628",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "Novaexchange",
    tradingPairs: 3,
    dailyVolumeUSD: "$101",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "BTCTrade",
    tradingPairs: 0,
    dailyVolumeUSD: "$0",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "Coincoz",
    tradingPairs: 1,
    dailyVolumeUSD: "$0",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "Indacoin",
    tradingPairs: 0,
    dailyVolumeUSD: "$0",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "Bit2c The Bitcoin Exchange Of Israel",
    tradingPairs: 0,
    dailyVolumeUSD: "$0",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "BitMarket",
    tradingPairs: 0,
    dailyVolumeUSD: "$0",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "Braziliex",
    tradingPairs: 0,
    dailyVolumeUSD: "$0",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "Coinnest",
    tradingPairs: 0,
    dailyVolumeUSD: "$0",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "Bitcoin Exchange Thailand",
    tradingPairs: 0,
    dailyVolumeUSD: "$0",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "Bisq",
    tradingPairs: 0,
    dailyVolumeUSD: "$0",
    dailyVolumeBTC: "0"
  },
  {
    exchangeName: "Stocks Exchange",
    tradingPairs: 0,
    dailyVolumeUSD: "$0",
    dailyVolumeBTC: "0"
  }
];

export { marketList };
