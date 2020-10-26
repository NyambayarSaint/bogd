import htmlToText from 'html-to-text'

const decrease = (string, length)=>{
    let tmp = htmlToText.fromString(string);
    let linkCount = tmp.split('[').length -1

    // TO REMOVE ALL LINKS
    for(let i=0;i<linkCount; i++){
        let first = tmp.indexOf('[')
        let second = tmp.indexOf(']')
        let remove = tmp.slice(first, second+1)
        tmp = tmp.replace(remove, '');
    }
    
    return tmp.slice(0,length);
}

export default decrease