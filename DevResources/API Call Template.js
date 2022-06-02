function getFetch(){

let data = "SoAndSo"

fetch(`www.apiAddressGoesHere.com/${data}`)
.then(res => res.json())
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(`error ${err}`)
});

}