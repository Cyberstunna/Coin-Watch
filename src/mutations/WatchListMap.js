const axios = require('axios');

class WatchList {
    constructor(){
        this.list = {};
        this.length = 0;
        this.initial_size = 10;
        this.available_size = 10;
    }

    addKey(coin_id){
        if(this.available_size > 0){
            if(Object.hasOwn(this.list, coin_id)){return false};
            if(coin_id){ 
                Object.defineProperty(this.list, coin_id, {
                    value: this.#getKeyData(coin_id),
                    writable: true
                });
            }
            this.length++;
            this.available_size-=2
            return this;
        }
    };

    #getKeyData(coin_id){
        let resp = axios.get(`https://api.coingecko.com/api/v3/coins/${coin_data}/market_chart?vs_currency=usd&days=30&interval=hourly`)
        .catch(err => {console.log(err); return null});
        return resp.data;
    }
}