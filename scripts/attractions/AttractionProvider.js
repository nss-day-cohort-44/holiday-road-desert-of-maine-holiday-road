

let attractions = []

export const useAttractions = () => {
    return attractions.slice()
}

export const getAttractions = () => { 
  return fetch("http://holidayroad.nss.team/bizarreries")
  
.then(response => response.json())
.then (parsedAttractions => {
   attractions = parsedAttractions
    console.log(attractions)
})
}
//.data after parsed attractions?