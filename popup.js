document.addEventListener('DOMContentLoaded', (event) => {
    let c='';
    document.addEventListener('keydown', async function(event) {
      if (event.ctrlKey && event.shiftKey && event.code==='KeyZ') {
        c = await navigator.clipboard.readText();
        let selectedText = window.getSelection().toString();
        navigator.clipboard.writeText(c+" "+selectedText)
        .then(async () => {
          let sample = await navigator.clipboard.readText();
        })
        .catch(err => {
            alert('Failed to copy text: ', err);
        });
        
      }
    });



  });
  