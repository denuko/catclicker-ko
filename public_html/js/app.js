var initialCats = [
    {
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        clickCount: 0,
        imgAttribution: 'https://www.flickr.com/photos/big',
        nicknames: ['Fluffy', 'Mr Wiskers', 'Mitsi', 'Kiki', 'Neko']
    },
    {
        name: 'The cat',
        imgSrc: 'img/thecat.jpg',
        clickCount: 0,
        imgAttribution: '',
        nicknames: ['Fiffy']
    },
    {
        name: 'Second cat',
        imgSrc: 'img/secondcat.jpg',
        clickCount: 0,
        imgAttribution: '',
        nicknames: ['Titi']
    },
    {
        name: 'Third cat',
        imgSrc: 'img/thirdcat.jpg',
        clickCount: 0,
        imgAttribution: '',
        nicknames: ['Mushi']
    },
    {
        name: 'Fourth cat',
        imgSrc: 'img/fourthcat.jpg',
        clickCount: 0,
        imgAttribution: '',
        nicknames: ['Rin']
    },
    {
        name: 'Fifth cat',
        imgSrc: 'img/fifthcat.jpg',
        clickCount: 0,
        imgAttribution: '',
        nicknames: ['Fuffy']
    },
    {
        name: 'Sixth cat',
        imgSrc: 'img/sixthcat.jpg',
        clickCount: 0,
        imgAttribution: '',
        nicknames: ['Johnny']
    },
    {
        name: 'Seventh cat',
        imgSrc: 'img/seventhcat.jpg',
        clickCount: 0,
        imgAttribution: '',
        nicknames: ['Larry']
    },
    {
        name: 'Eighth cat',
        imgSrc: 'img/cat8.jpg',
        clickCount: 0,
        imgAttribution: '',
        nicknames: ['Tost']
    },
    {
        name: '9th cat',
        imgSrc: 'img/cat9.jpg',
        clickCount: 0,
        imgAttribution: '',
        nicknames: ['Lucy']
    }
];

var Cat = function (data) {

    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);
    this.level = ko.computed(function () {
        var level;
        switch (true) {
            case (this.clickCount() < 10):
                level = 'Newborn';
                break;
            case (this.clickCount() >= 10 && this.clickCount() < 20):
                level = 'Infant';
                break;
            case (this.clickCount() >= 20 && this.clickCount() < 30):
                level = 'Teen';
                break;
            case (this.clickCount() >= 30 && this.clickCount() < 40):
                level = 'Adult';
                break;
            case (this.clickCount() >= 40 && this.clickCount() < 50):
                level = 'Old';
                break;
            case (this.clickCount() >= 50):
                level = 'RIP';
                break;
            default:
                alert('Invalid clickCount ' + this.clickCount());
                break;
        }

        return level;
    }, this);
};

var ViewModel = function () {
    var self = this;

    self.catList = ko.observableArray([]);

    initialCats.forEach(function (catItem) {
        self.catList.push(new Cat(catItem));
    });

    self.currentCat = ko.observable(self.catList()[0]);
    
    self.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
    
    self.changeCurrentCat = function (clickedCat) {
        self.currentCat(clickedCat);
    };
};

ko.applyBindings(new ViewModel());