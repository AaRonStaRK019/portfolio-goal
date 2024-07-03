function updateTime() {
    const now = new Date();
    const utcTime = now.toISOString().split('T')[1].split('.')[0];
    const dayOfWeek = now.toLocaleDateString('en-GB', { weekday: 'long' });
    document.getElementById('current-time').textContent = utcTime;
    document.getElementById('current-day').textContent = dayOfWeek;
}
setInterval(updateTime, 1000);
updateTime();