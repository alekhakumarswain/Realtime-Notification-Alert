self.addEventListener('push', function (event) {
    const options = {
      body: event.data.text(),
      icon: 'icon.png', // Specify a suitable icon for notifications
      badge: 'icon.png', // Specify a badge for notifications
    };
  
    event.waitUntil(
      self.registration.showNotification('New Notification', options)
    );
  });
  