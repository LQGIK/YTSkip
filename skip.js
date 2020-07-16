//Just cheated the system
/* document.querySelector('[aria-label="Why this ad?"]').click();
document.querySelector('[aria-label="Stop seeing this ad"]').click();
document.querySelector('div.ytp-ad-info-dialog-feedback-options > label:nth-child(1)').click();
document.querySelector('div.ytp-ad-feedback-dialog-confirm-container > button.ytp-ad-feedback-dialog-confirm-button').click(); */

if (document.querySelector('[aria-label="Why this ad?"]')) {
	document.querySelector('[aria-label="Why this ad?"]').click();
    document.querySelector('[aria-label="Stop seeing this ad"]').click();
    
    // Get mySpan, from mySpan, grab the radio elements and click first one
    var mySpan;
    document.querySelectorAll('span').forEach(e => {if (e.innerHTML.startsWith('What was wrong with this ad?')) mySpan = e;});
    mySpan.nextElementSibling.children[0].click();

    // Grab siblings & find Send Button within the siblings
    var siblings = Array.from(mySpan.parentNode.children);
    Array.from(siblings[siblings.length - 1].children).forEach(e => {if (e.innerHTML.startsWith("Send")) e.click()});
}

/* var queryByHTML = (text, html_element="*", starting_element=null) => {
    
    //Params: (text, html_element="*", starting_element=null)
    
    var myElement;
    if (starting_element){
        document.querySelectorAll(html_element).forEach(e => {if (e.innerHTML && e.innerHTML.startsWith(text)) myElement = e;});
    }
    else{
        Array.from(starting_element.children).forEach(e => {if (e.innerHTML.startsWith(text)) myElement = e;});
    }

    return myElement;
} */