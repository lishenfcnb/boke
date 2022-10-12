// 获取所有.box元素
const boxList = document.querySelectorAll('.box')
    // 监听滚动条
window.addEventListener('scroll', scrolload)

// 3.滚动条加载函数
function scrolload() {
    // 1.定义一个目标值
    let taggerValue = window.innerHeight * 0.8
        // 2.获取每个box 距离浏览器顶部的值
    boxList.forEach(box => {
        let boxTop = box.getBoundingClientRect().top
        if (boxTop <= taggerValue) {
            box.classList.add('show-center')
        } else {
            box.classList.remove('show-center')
        }
    })
}