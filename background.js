chrome.commands.onCommand.addListener(function(command) {
    if (command === 'trigger-alert') {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Key Combination Detected',
        message: 'Ctrl + Shift + Z was pressed!'
      });
    }
  });
  