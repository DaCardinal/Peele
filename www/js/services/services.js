angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Items', function() {

  // Some fake testing data
  var items = [{
    id: 1,
    name: 'Item 1',
    price: '$15.00',
    url: 'http://lorempixel.com/300/300/food?0',
    verified: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    vendor: 'Vendor 1',
    views: '43',
    posted: 'just now'
  }, {
    id: 2,
    name: 'Item 2',
    price: '$12.50',
    url: 'http://lorempixel.com/300/300/food?1',
    verified: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    vendor: 'Vendor 2',
    views: '86',
    posted: '12 mins ago'
  },{
    id: 3,
    name: 'Item 3',
    price: '$15.00',
    url: 'http://lorempixel.com/300/300/food?2',
    verified: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    vendor: 'Vendor 3',
    views: '16',
    posted: '56 mins ago'
  }, {
    id: 4,
    name: 'Item 4',
    price: '$5.00',
    url: 'http://lorempixel.com/300/300/food?3',
    verified: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    vendor: 'Vendor 4',
    views: '32',
    posted: 'about an hour ago'
  }, {
    id: 5,
    name: 'Item 5',
    price: '$20.00',
    url: 'http://lorempixel.com/300/300/food?4',
    verified: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    vendor: 'Vendor 5',
    views: '5',
    posted: '1 day ago'
  }];
  return {
    all: function() {
      return items;
    },
    remove: function(itemID) {
      items.splice(items.indexOf(itemID), 1);
    },
    get: function(itemID) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemID)) {
          return items[i];
        }
      }
      return null;
    }
  };
});
