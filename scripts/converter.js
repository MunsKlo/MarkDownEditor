function convertToHTMl(txt){
    var converter = new showdown.Converter()
    return converter.makeHtml(txt)
}

function fillDiv(){
    var htmlMd = convertToHTMl(document.getElementById("inputfield").value)
    document.getElementById("markdown-text").innerHTML = htmlMd
    console.log(document.getElementById("markdown-text").innerHTML)
}

function editText(button){
    if(window.Selection){
            var textarea = document.getElementById('inputfield')
            var text = (textarea.value).substring(textarea.selectionStart, textarea.selectionEnd)
            text = text.trim()
            var newText = ''
        if(button == 'heading'){
            newText = setHeader(text)
        }

        if(button == 'bold'){
            newText = setBold(text)
        }

        if(button == 'italic'){
            newText = setItalic(text)
        }
        
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

function setBold(text){
    if(text[0] + text[1] == '**' && text[text.length - 1] + text[text.length - 2] == '**'){
        text = text.substring(2, text.length - 2)
        return text
    }
    else{
        return `**${text}**`
    }
}

function setItalic(text){
    if(text.substring(0, 3) == '***' && text.substring(text.length - 3, text.length) == '***'){
        text = text.substring(1, text.length - 1)
        return text
    }

    if(text[0] + text[1] == '**' && text[text.length - 1] + text[text.length - 2] == '**'){
        return `*${text}*`
    }

    if(text[0] == '*' && text[text.length - 1] == '*'){
        text = text.substring(1, text.length - 1)
        return text
    }
    else{
        return `*${text}*`
    }
}

function setNewTextinTextArea(textarea, newText){
    var textareaBegin = textarea.value.substring(0, textarea.selectionStart)
    var textareaEnd = textarea.value.substring(textarea.selectionEnd, textarea.value.length)
    if(textareaBegin.length > 0 && textareaBegin[textareaBegin.length - 1] != ' '){
        textareaBegin = textareaBegin + ' '
    }
    if(textareaEnd.length > 0 && textareaEnd[0] != ' '){
        textareaEnd = ' ' + textareaEnd
    }
    var newValue = `${textareaBegin}${newText}${textareaEnd}`
    textarea.value = newValue
}

document.getElementById("inputfield").addEventListener('input', () => fillDiv())
document.getElementById("makeHeading").addEventListener('click', () => editText('heading'))
document.getElementById("makeBold").addEventListener('click', () => editText('bold'))
document.getElementById("makeItalic").addEventListener('click', () => editText('italic'))
