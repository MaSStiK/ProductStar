import pick from "lodash/pick.js"
export const savedJikanResult = []

// Получение результатов из api
export async function getJikan(searchQuery) {
    // Поиск по сохраненным
    const savedResult = savedJikanResult.find(item => item.keyword === searchQuery)
    if (savedResult) return savedResult.result

    // Если нету в сохраненных - получаем из api
    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}&sfw`
    const data = await fetch(url).then(r => r.json())
    const filtered = data.data.map(item => {
        const picked = pick(item, ["title", "duration", "episodes", "favorites", "score"])
        picked.image = item.images.jpg.image_url
        return picked
    })
    saveJikanResult(searchQuery, filtered)
    return filtered
}

// Сохранение результатов
function saveJikanResult(searchQuery, result) {
    savedJikanResult.push({keyword: searchQuery, result})
}