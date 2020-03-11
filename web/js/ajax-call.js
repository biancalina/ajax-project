const getResponse = path => {
  const ajaxCall = new XMLHttpRequest()
  ajaxCall.onreadystatechange = () => {
    if(ajaxCall.readyState === 4 && ajaxCall.status === 200) {
      const response = JSON.parse(ajaxCall.responseText)
      console.table(response)
    }
  }

  ajaxCall.open('GET', `http://localhost:3344/${path}`)
  ajaxCall.send()
}

const keyList = ["animal", "weather", "food"]
keyList.forEach(key => {
  getResponse(key)
})
