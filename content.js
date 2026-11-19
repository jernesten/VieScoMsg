chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action !== "insertIntoGmail") return;

    const editables = Array.from(document.querySelectorAll(
        'div[aria-label="Cuerpo del mensaje"][contenteditable="true"], ' +
        'div[aria-label="Message Body"][contenteditable="true"], ' +
        'div.Am.Al.editable[contenteditable="true"], ' +
        'div[role="textbox"][contenteditable="true"]'
    ));

    const visibleEditables = editables.filter(el => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
    });

    const target =
        visibleEditables.find(el => el === document.activeElement || el.contains(document.activeElement)) ||
        visibleEditables[visibleEditables.length - 1];

    if (!target) {
        sendResponse({
            success: false,
            error: "Abre un mensaje nuevo o pulsa en Responder en Gmail antes de insertar."
        });
        return true;
    }

    target.focus();

    // Coloca el cursor al final del contenido actual del editor
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(target);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    const lines = String(request.text).split('\n');
    lines.forEach((line, index) => {
        if (line.length > 0) {
            document.execCommand('insertText', false, line);
        }
        if (index < lines.length - 1) {
            document.execCommand('insertParagraph');
        }
    });

    target.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: true }));
    target.dispatchEvent(new Event('change', { bubbles: true }));

    sendResponse({ success: true });
    return true;
});
