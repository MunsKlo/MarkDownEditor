function convertToHTMl(txt){
    var converter = new showdown.Converter()
    return converter.makeHtml(txt)
}

function fillDiv(){
    var htmlMd = convertToHTMl(document.getElementById("inputfield").value)
    document.getElementById("markdown-text").innerHTML = htmlMd
}

<<<<<<< HEAD
document.getElementById("inputfield").addEventListener('input', () => fillDiv())
=======
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
>>>>>>> 10f21f3fef0e2338850d18831e81c372cdfd77ad
