
const testtime=()=>{
    let date= moment()
    date= date.format('jYYYY/jM/jD')
    document.querySelector('#date').innerHTML=date
}

testtime()