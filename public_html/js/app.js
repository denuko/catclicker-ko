var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };

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
}

ko.applyBindings(new ViewModel());