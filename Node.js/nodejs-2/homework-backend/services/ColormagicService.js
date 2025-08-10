import pick from "lodash/pick.js"
export const savedColormagicResult = []

// Получение результатов из api
export async function getColormagic(searchQuery) {
    // Поиск по сохраненным
    const savedResult = savedColormagicResult.find(item => item.keyword === searchQuery)
    if (savedResult) return savedResult.result

    // Если нету в сохраненных - получаем из api
    const url = `https://colormagic.app/api/palette/search?q=${encodeURIComponent(searchQuery)}`
    const data = await fetch(url).then(r => r.json())
    const filtered = data.map(item => pick(item, ["colors", "text", "likesCount"]))
    saveColormagicResult(searchQuery, filtered)
    return filtered
}

// Сохранение результатов
function saveColormagicResult(searchQuery, result) {
    savedColormagicResult.push({keyword: searchQuery, result})
}