function encodeAndDecodeMessages() {
    let inputTextArea = document.querySelector("#main div:nth-child(1) textarea");
    let encodeSendButton = document.querySelector("#main div:nth-child(1) button");

    let outputTextArea =  document.querySelector("#main div:nth-child(2) textarea");
    let decodeButton = document.querySelector("#main div:nth-child(2) button");

    
    encodeSendButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);
    
    function encodeMessage(){
        let input = inputTextArea.value
        
        let newMessage = '';
        
        for(let i = 0; i < input.length; i++){
            newMessage += String.fromCodePoint(input[i].charCodeAt(0) + 1);
        }

        outputTextArea.value = newMessage;
        inputTextArea.value = '';
        decodeButton.disabled = false;

    }

    function decodeMessage(){
        let message = outputTextArea.value;

        let newMessage = "";

        for (let i = 0; i < message.length; i++) {

            newMessage += String.fromCodePoint(message[i].charCodeAt(0) - 1);
            
        }

        outputTextArea.value = newMessage;
        encodeSendButton.disabled = true;

    }


}