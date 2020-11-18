function convertToHTMl(txt){
    var converter = new showdown.Converter()
    return converter.makeHtml(txt)
}

function fillDiv(){
    var htmlMd = convertToHTMl(document.getElementById("inputfield").value)
    document.getElementById("markdown-text").innerHTML = htmlMd
}

document.getElementById("inputfield").addEventListener('input', () => fillDiv())