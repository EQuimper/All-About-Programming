void main() {
  var deck = new Deck();

  deck.shuffle();

  print(deck);
  print(deck.deal(5));
  print(deck);
}

class Card {
  String suit;
  String rank;

  Card({this.rank, this.suit});

  toString() {
    return '$rank of $suit';
  }
}

class Deck {
  List<Card> cards = [];

  final ranks = [
    'Ace',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Jack',
    'Queen',
    'King'
  ];

  final suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];

  Deck() {
    for (var suit in suits) {
      for (var rank in ranks) {
        var card = new Card(suit: suit, rank: rank);

        cards.add(card);
      }
    }
  }

  toString() {
    return cards.toString();
  }

  shuffle() {
    cards.shuffle();
  }

  cardsWithSuits(String suit) {
    return cards.where((card) => card.suit == suit);
  }

  deal(int handSize) {
    var hand = cards.sublist(0, handSize);

    cards = cards.sublist(handSize);

    return hand;
  }

  removeCard(String rank, String suit) {
    cards.removeWhere((card) {
      return card.suit == suit && card.rank == rank;
    });
  }
}
