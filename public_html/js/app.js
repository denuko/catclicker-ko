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
    self.currentCat = ko.observable(new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/big',
        nicknames: ['Fluffy', 'Mr Wiskers', 'Mitsi', 'Kiki', 'Neko'],
    }));
    self.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());