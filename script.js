document.addEventListener("DOMContentLoaded", () => {
    const liveTime = document.getElementById("live-time");
    const uptimeDisplay = document.getElementById("uptime-counter");

    // 1. تحديث ساعة النظام في الوقت الفعلي
    function updateClock() {
        const now = new Date();
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');
        liveTime.textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. تحديث مؤقت المهمة المستمر (Uptime)
    let totalSeconds = 45 * 86400 + 12 * 3600 + 44 * 60 + 12; // عداد افتراضي أولي للمهمة
    function updateUptime() {
        totalSeconds++;
        let d = Math.floor(totalSeconds / 86400);
        let h = Math.floor((totalSeconds % 86400) / 3600);
        let m = Math.floor((totalSeconds % 3600) / 60);
        let s = totalSeconds % 60;

        uptimeDisplay.textContent = `${String(d).padStart(2, '0')}D : ${String(h).padStart(2, '0')}H : ${String(m).padStart(2, '0')}M : ${String(s).padStart(2, '0')}S`;
    }
    setInterval(updateUptime, 1000);
});