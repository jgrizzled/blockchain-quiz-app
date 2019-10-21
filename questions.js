//data for quiz questions
const QUESTIONS = [
  {
    questionText: 'Which best describes a blockchain?',
    answers: [
      {
        text: 'A linked list',
        correct: false
      },
      {
        text: 'A chronologically ordered ledger of data',
        correct: true
      },
      {
        text: 'A decentralized currency',
        correct: false
      },
      {
        text: 'A database',
        correct: false
      }
    ],
      explanation: 'A blockchain is a data structure which consists of blocks of data, such as transactions. Each block contains a reference to the previous block, such that it is guaranteed to have been created after the previous block, otherwise the reference to the previous block could not be created. This provides a good way to track transactions or state in a distributed network, with each block being a snapshot of time. Earlier history cannot be altered because that would alter the previous block references in every following block. Many decentralized cryptocurrency networks use blockchains to store the state of the transaction ledger.'
  },
  {
    questionText: 'What does "crypto" refer to in "cryptocurrency?"',
    answers: [
      {
        text: 'The use of cryptography to allow users to digitally sign transactions and prove ownership of coins',
        correct: true
      },
      {
        text: 'The design is cryptic to make the software hard to exploit',
        correct: false
      },
      {
        text: 'The internet traffic uses cryptography for encryption',
        correct: false
      },
      {
        text: 'The subculture of its users is cryptic and outside mainstream finance',
        correct: false
      }
    ],
      explanation: 'Cryptocurrencies use public key cryptography to mathematically prove which users own which coins, preventing hackers from stealing money. The owner of some cryptocurrency has a "private key" which is like a password to spend the coins. A private key has a corresponding public key, which is like an email address to which others can send money to. It is crucial for users to keep their private keys secret, otherwise someone else could use it to steal their money!'
  },
  {
    questionText: 'What best describes "decentralized" in the context of decentralized cryptocurrency?',
    answers: [
      {
        text: 'Users are geographically distributed',
        correct: false
      },
      {
        text: 'The software uses a blockchain',
        correct: false
      },
      {
        text: 'No single party has control over the network',
        correct: true
      },
      {
        text: 'The servers do not have a single point of failure',
        correct: false
      }
    ],
      explanation: 'While all of these answers are generally true for cryptocurrencies, decentralization refers to the property that no single party can control the state of the network. This means that users of the network do not have to trust any particular individual, company, or government to process their transactions. This is in contrast to a centralized currency, such as one issued by a government.'
  },
  {
    questionText: 'What best describes the purpose of a consensus algorithm in the context of decentralized cryptocurrency?',
    answers: [
      {
        text: 'determines who owns what coins',
        correct: false
      },
      {
        text: 'allows a decentralized network to reach agreement about the history of the transaction ledger',
        correct: true
      },
      {
        text: 'handles disputes between cryptocurrency users',
        correct: false
      },
      {
        text: 'counts votes to determine if ballot measures pass or fail',
        correct: false
      }
    ],
      explanation: 'Consensus algorithms are used in decentralized cryptocurrencies to come to consensus about transactions. They are designed to prevent a single party from controlling the state of the network, such that no one could censor transactions or alter their order.'
  },
  {
    questionText: 'What is the consensus algorithm called that Bitcoin uses?',
    answers: [
      {
      text: 'Fraud proofs',
      correct: false
      },
      {
        text: 'Public key cryptography',
        correct: false
      },
      {
        text: 'Proof of stake',
        correct: false
      },
      {
        text: 'Proof of work',
        correct: true
      }
    ],
      explanation: 'The Bitcoin network uses a consensus algorithm called Proof of Work. It relies on users running specialized hardware (called miners) that computes proofs to secure the transaction history. Proof of stake is also a type of consensus algorithm used by other cryptocurrencies.'
  },
  {
    questionText: 'What best describes a smart contract?',
    answers: [
      {
      text: 'A digitized legal contract',
      correct: false
      },
      {
        text: 'Legally enforceable code',
        correct: false
      },
      {
        text: 'A well written legal contract',
        correct: false
      },
      {
        text: 'A contract enforced by a blockchain network',
        correct: true
      }
    ],
      explanation: 'A smart contract is a piece of software that runs on a blockchain, which is used to facilitate commerce between parties. Smart contracts are defined in a programming language and control ownership of cryptocurrency. Smart contracts can be used for financial contracts like fundraises, auctions, and loans.'
  },
  {
    questionText: 'What best describes Ethereum?',
    answers: [
      {
      text: 'An alternative public blockchain to Bitcoin',
      correct: false
      },
      {
        text: 'An upgraded version of Bitcoin',
        correct: false
      },
      {
        text: 'A public blockchain which runs smart contracts and decentralized applications',
        correct: true
      },
      {
        text: 'A private blockchain for financial institutions',
        correct: false
      }
    ],
      explanation: 'The Ethereum network is a public blockchain network which allows users to run smart contracts and decentralized applications. Users can interact with a number of financial services for their cryptocurrency.'
  },
  {
    questionText: 'Which of the following is a decentralized application running on the Ethereum blockchain?',
    answers: [
      {
      text: 'MakerDAO',
      correct: true
      },
      {
        text: 'Bitcoin',
        correct: false
      },
      {
        text: 'Electrum Wallet',
        correct: false
      },
      {
        text: 'Metamask',
        correct: false
      }
    ],
      explanation: 'MakerDAO is a decentralized application running on the Ethereum blockchain which provides a cryptocurrency (named Dai) that is pegged to US dollar. Bitcoin is its own blockchain, while Electrum and Metamask are wallet software for storing cryptocurrencies.'
  }

]

/* blank question 
  {
    questionText: '',
    answers: [
      {
      text: '',
      correct: false
      },
      {
        text: '',
        correct: false
      },
      {
        text: '',
        correct: false
      },
      {
        text: '',
        correct: false
      }
    ],
      explanation: ''
  }
  */