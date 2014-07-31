(function() {
  var app = angular.module('sandbox', []);

  app.controller('sandboxController', function() {
    this.museums = allMuseums;
  });

  var allMuseums = [
    {
      name: 'Metropolitan Museum of Art',
      location: 'New York City',
      squareFootage: '10,000 sq ft',
      opened: '1900',
      offersTours: true,
      entryFee: 10,
      isFree: true,
      images: [
        {
          full:"http://placehold.it/300x300",
          thumb:"http://placehold.it/50x50"
        },
        {
          full:"http://placekitten.com/300/300",
          thumb:"http://placekitten.com/50/50"
        }
      ]
    },
    {
      name: 'Philadelphia Museum of Art',
      location: 'Philadelphia',
      squareFootage: '10,000 sq ft',
      opened: '1900',
      offersTours: false,
      entryFee: 20.50,
      isFree: true,
      images: [
        {
          full:"http://placehold.it/300x300",
          thumb:"http://placehold.it/50x50"
        },
        {
          full:"http://placehold.it/300x300",
          thumb:"http://placehold.it/50x50"
        }
      ]
    },
    {
      name: 'The Louvre',
      location: 'Paris',
      squareFootage: '10,000 sq ft',
      opened: '1900',
      offersTours: false,
      entryFee: 30,
      isFree: true,
      images: [
        {
          full:"http://placehold.it/300x300",
          thumb:"http://placehold.it/50x50"
        },
        {
          full:"http://placekitten.com/300/300",
          thumb:"http://placekitten.com/50/50"
        }
      ]
    },
    {
      name: 'MoMA',
      location: 'Philadelphia',
      squareFootage: '10,000 sq ft',
      opened: '1900',
      offersTours: false,
      entryFee: 12,
      isFree: true
    },
    {
      name: 'Mass MoCA',
      location: 'Philadelphia',
      squareFootage: '10,000 sq ft',
      opened: '1900',
      offersTours: false,
      entryFee: 20.95,
      isFree: true,
      images: [
        {
          full:"http://placehold.it/300x300",
          thumb:"http://placehold.it/50x50"
        },
        {
          full:"http://placekitten.com/300/300",
          thumb:"http://placekitten.com/50/50"
        }
      ]
    }
  ];

  app.controller('panelController', function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
})();