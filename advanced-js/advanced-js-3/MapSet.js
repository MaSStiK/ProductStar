{
    console.log("MapSet");

    const map = new Map()
    map.set("Alex", 25)
    map.set("Nikita", 15)
    map.set("Maxim", 20)
    map.set("Anna", 10)
    map.set(100, 100100)

    console.log("Alex", map.get("Alex"))
    console.log("Nikita", map.get("Nikita"))
    console.log(100, map.get(100))
    map.delete("Maxim")
    console.log("Maxim", map.has("Maxim"))
    console.log("Maxim", map.get("Maxim"))

    map.set("Alex", 30)
    console.log("Alex", map.get("Alex"))



    const set = new Set()
    set.add("Alex")
    set.add("Nikita")
    set.add("Maxim")
    set.add("Anna")

    console.log("Alex", set.has("Alex"))
    console.log("Nikita", set.has("Nikita"))
    set.delete("Anna")
    console.log("Anna", set.has("Anna"))
}