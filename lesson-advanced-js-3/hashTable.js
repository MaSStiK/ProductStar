{
    console.log("hashTable");

    class Item {
        constructor(key, value) {
            this.key = key
            this.value = value
            this.nextItem = null
        }
    }

    class HashTable {
        constructor() {
            this.arr = []
            this.length = 6
        }

        getHash(string) {
            let sum = 0

            for (let i = 0; i < string.length; i++) {
                sum += string.charCodeAt(i)
            }

            return sum % this.length
        }

        set(key, value) {
            const index = this.getHash(key)

            if (!this.arr[index]) {
                this.arr[index] = new Item(key, value)
            } else {
                let currentItem = this.arr[index]

                while (true) {
                    if (!currentItem.nextItem) {
                        currentItem.nextItem = new Item(key, value)
                        return
                    } else {
                        currentItem = currentItem.nextItem
                    }
                }
            }
        }

        get(key) {
            const index = this.getHash(key)

            if (!this.arr[index].nextItem) {
                return this.arr[index].value
            }

            let curItem = this.arr[index]

            while (true) {
                if (curItem.key === key) {
                    return curItem.value
                }

                curItem = curItem.nextItem
            }
        }
    }

    let hashTable = new HashTable()

    hashTable.set("fridge", 1000)
    hashTable.set("table", 500)
    hashTable.set("sofa", 700)
    hashTable.set("TV", 800)
    hashTable.set("chair", 300)
    hashTable.set("book", 20)

    console.log(hashTable)

    console.log(hashTable.get("book"))
    console.log(hashTable.get("TV"))
}