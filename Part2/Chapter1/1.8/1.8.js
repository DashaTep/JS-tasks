function showNotification({top, right, text, position})
{
    let notification = document.createElement('div')
    notification.className = "notification";
    notification.style.top = top + 'px';
    notification.style.right = right + 'px';
    notification.style.position = position;

    notification.innerHTML = text;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
}

setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      text: 'Notification',
      position: 'fixed'
    });
  }, 2000);
