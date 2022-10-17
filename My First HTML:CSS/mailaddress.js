// 도메인을 직접 입력 or 선택
const domainListEl = document.querySelector('#domain_list')
const domainInputEl = document.querySelector('#domain_txt')

// 도메인 선택 시
domainListEl.addEventListener('change', (event) => {
    if (event.target.value !== "type") {
        domainInputEl.value = event.target.value
        domainInputEl.disabled = true
    } else {
        domainInputEl.value = ""
        domainInputEl.disabled = false
    }
})