document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("custom-context-menu");

    // إظهار القائمة المخصصة عند الضغط على الزر الأيمن للماوس في أي مكان بالصفحة
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        menu.style.display = "block";
        menu.style.left = `${e.pageX}px`;
        menu.style.top = `${e.pageY}px`;
    });

    // إخفاء القائمة عند النقر خارجها
    document.addEventListener("click", () => {
        menu.style.display = "none";
    });

    // إضافة وظائف تفاعلية لعناصر القائمة
    menu.addEventListener("click", (e) => {
        const action = e.target.getAttribute("data-action");
        if (!action) return;

        const terminalInput = document.getElementById("terminal-cmd-input");
        
        if (action === "clear") {
            document.getElementById("terminal-log").innerHTML = "";
        } else if (action === "exit") {
            alert("إغلاق الجلسة التكتيكية...");
            window.close();
        } else {
            // إرسال الأمر للترمينال تلقائياً
            if (terminalInput) {
                terminalInput.value = action;
                // محاكاة الضغط على زر Enter لإرسال الأمر
                const event = new KeyboardEvent('keydown', {'key': 'Enter'});
                terminalInput.dispatchEvent(event);
            }
        }
    });
});