class MyHashSet {
    constructor() {
        this.set = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.contains(key)){
            this.set.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        for (let i = 0; i<this.set.length;i++){
            if (this.set[i] == key){
                this.set.splice(i,1);
            }
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let found = false;
        for (let val of this.set){
            if (val == key)
                found = true;
        }
        return found;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
