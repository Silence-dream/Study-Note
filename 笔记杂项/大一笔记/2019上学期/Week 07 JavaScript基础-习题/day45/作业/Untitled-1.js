function getYMD() {
    let date = new Date()

    let d = date.getDate()
    console.log(d)

    let m = date.getMonth()
    console.log(m)

    let y = date.getFullYear()
    console.log(y)
    return `${y}年${m}月${d}日`
}
