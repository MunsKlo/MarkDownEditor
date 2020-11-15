function convertToHTMl(txt){
    var converter = new showdown.Converter()
    return converter.makeHtml(txt)
}

function fillDiv(){
    var htmlMd = convertToHTMl(document.getElementById("inputfield").value)
    document.getElementById("markdown-text").innerHTML = htmlMd
}

function makeHeader(){
    if(window.Selection){
        var textarea = document.getElementById('inputfield')
        var text = (textarea.value).substring(textarea.selectionStart, textarea.selectionEnd)

        if(text[0] == '#'){
            for(i = 0; i > text.length; i++){
                
            }
        }
        console.log(textarea.selectionStart)
    }
}

document.getElementById("inputfield").addEventListener('input', () => fillDiv())
document.getElementById("makeHeading").addEventListener('click', () => makeHeader())