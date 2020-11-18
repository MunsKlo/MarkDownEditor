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
        text = text.trim();
        var newText = setHeader(text)
        setNewTextinTextArea(textarea, newText)
        fillDiv()

    }
}

function setHeader(text){
    var counter = 0
    if(text[0] == '#'){
        counter = 1
        for(i = 1; i < text.length; i++){
            if(text[i] == '#'){
                counter++
            }
            else{
                break
            }
        }
    }
    else{
        return '#' + text
    }
    console.log(counter)
    if(counter > 5){
        text = text.substring(counter, text.length)
        return text
    }
    else{
        return '#' + text
    }
}

function setNewTextinTextArea(textarea, newText){
    var textareaBegin = textarea.value.substring(0, textarea.selectionStart)
    var textareaEnd = textarea.value.substring(textarea.selectionEnd, textarea.value.length)
    var newValue = `${textareaBegin}${newText}${textareaEnd}`
    console.log(textarea.length)
    textarea.value = newValue
}

document.getElementById("inputfield").addEventListener('input', () => fillDiv())
document.getElementById("makeHeading").addEventListener('click', () => makeHeader())
