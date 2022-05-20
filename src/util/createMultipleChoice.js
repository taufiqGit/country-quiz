export default function CreateMultipleChoice(listCountry) {
    let listMultipleChoice = []
    let i = 1
    while (i <= 4) {
        let checkSame = listMultipleChoice.filter((item, index) => listMultipleChoice.indexOf(item) !== index)
        console.log(checkSame, 'kkk');
        if (checkSame.length <= 0) {
            let randomIndex = Math.floor(Math.random() * listCountry.length)
            let itemCountry = listCountry[randomIndex]
            if (itemCountry.capital) {
                let itemAnswer = {
                    capital: itemCountry.capital,
                    flags: itemCountry.flags,
                    name: itemCountry.name
                } 
                listMultipleChoice.push(itemAnswer)
                i++                      
            }
        } else{
            listMultipleChoice.pop()
            i--
        }
    }    
    const abcd = ['A', 'B', 'C', 'D']
    for (let i = 0; i < listMultipleChoice.length; i++) {
        listMultipleChoice[i].abcd = abcd[i]
    }
    return listMultipleChoice
}