function showNotification({top, right, text})
{
    let notification = document.createElement('div')
    notification.className = "notification";
    notification.style.top = top + 'px';
    notification.style.right = right + 'px';
    notification.innerHTML = text;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
}

setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      text: 'Notification'
    });
  }, 2000);
