const htmlWillRenderHere = document.querySelector('#view')

const getResponse = path => {
  const ajaxCall = new XMLHttpRequest()
  ajaxCall.onreadystatechange = () => {
    if(ajaxCall.readyState === 4 && ajaxCall.status === 200) {
      const response = JSON.parse(ajaxCall.responseText)
      render(response)
    }
  }

  ajaxCall.open('GET', `http://localhost:3344/${path}`)
  ajaxCall.send()
}

const keyList = ["animal", "weather", "food"]
keyList.forEach(key => {
  getResponse(key)
})

const render = response => {
  console.table(response[0])
  const keyList = Object.keys(response[0])
  console.log(keyList)
  const table = document.createElement('table')
  const tableHead = document.createElement('thead')
  const tableHeadRow = document.createElement('tr')
  const tableBody = document.createElement('tbody')
  keyList.forEach(key => {
    const td = document.createElement('td')
    td.textContent = key
    tableHeadRow.appendChild(td)
  })
  response.forEach(o => {
    const tableBodyRow = document.createElement('tr')
    keyList.forEach(key =>{
      console.log(o[key])
      const td = document.createElement('td')
      td.textContent = o[key]
      tableBodyRow.appendChild(td)
    })
    tableBody.appendChild(tableBodyRow)
  })

  tableHead.appendChild(tableHeadRow)
  table.appendChild(tableHead)
  table.appendChild(tableBody)
  htmlWillRenderHere.appendChild(table)
  htmlWillRenderHere.className = 'view-one'
}