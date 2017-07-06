// @TODO: config to async
// @TODO: more tests on wish() funtion // es7
// @TODO: put then and catch on offer array

module.exports = {
    _promises: [],
    _miracle: undefined,
    _lifeGoesOn: undefined,

    _offer: {
        promise: undefined,
        functions: [],
    },

    promise(fun) {
        return new Promise((resolve, reject) => {
            resolve(fun());
        });

        // return new Promise(resolve => {
        //     resolve(fun());
        // }, reject => {
        //
        // });
    },

    offer(val) {
        this._offer.promise = Promise.resolve(val);

        return this;
    },

    hasOffer() {
        return !! this._offer.promise;
    },

    bless(fun) {
        if (this.hasOffer) {
            this._offer.functions.push(fun);
        } else {
            this._promises.push(this.promise(fun));
        }

        return this;
    },

    miracle(fun) {
        this._miracle = fun;

        return this;
    },

    lifeGoesOn(fun) {
        this._lifeGoesOn = fun;

        return this;
    },

    pray(fun, err) {
        fun = fun || this._miracle || (() => console.log('A Miracle happened.'));
        err = err || this._lifeGoesOn || (() => console.log('Your faith is not enough.'));

        if (this.hasOffer()) {
            this.prayWithOffer(fun, err);
        } else {
            Promise.all(this._promises).then(fun).catch(err);
        }
    },

    prayWithOffer(fun, err) {
        let prom = this._offer.promise;

        this._offer.functions.forEach(fun => {
            prom = prom.then(fun);
        });

        prom.then(fun).catch(err);
    }

    // wish: async funtion(fun) {
    //     return await this.promise(fun);
    // },
};
