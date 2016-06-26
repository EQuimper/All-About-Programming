var Observable = function () {
    this.subscribers = [];
};

Observable.prototype = {
    subscribe: function (subscriber) {
        this.subscribers.push(subscriber);
    },

    unsubscribe: function (unsubscriber) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === unsubscriber) {
                this.subscribers.splice(i, 1);

                return unsubscriber.name;
            }
        }
    },

    publish: function (data) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].receiveData(data);
        }
    }
};

var OrganFanny = {
    name: "Organ Fanny",
    receiveData: function (data) {
        document.write(this.name + " reveived your info " + data + "<br />");
    }
};

var BoldmanYaks = {
    name: "Boldman Yaks",
    receiveData: function (data) {
        document.write(this.name + " reveived your info " + data + "<br />");
    }
};

observable = new Observable();

observable.subscribe(OrganFanny);
observable.subscribe(BoldmanYaks);

observable.publish("IBM at $145.30");

document.write(observable.unsubscribe(OrganFanny) + " unsubcribed <br />");

observable.publish('IBM at $144.30');

/*
 Organ Fanny reveived your info IBM at $145.30
 Boldman Yaks reveived your info IBM at $145.30
 Organ Fanny unsubcribed
 Boldman Yaks reveived your info IBM at $144.30
 */
