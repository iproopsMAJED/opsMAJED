document.addEventListener("DOMContentLoaded", () => {
    const cmdInput = document.getElementById("terminal-cmd-input");
    const terminalLog = document.getElementById("terminal-log");
    const terminalScreen = document.getElementById("terminal-screen");

    // قائمة الأوامر المتاحة في الترمينال
    const commands = {
        help: "الأوامر المتاحة: <br>• <strong>about</strong> - معلومات عن المطور<br>• <strong>skills</strong> - القدرات التكتيكية<br>• <strong>clear</strong> - مسح الشاشة<br>• <strong>system</strong> - حالة النظام الحالية",
        about: "OPERATOR: opsMAJED <br>STATUS: ELITE SQUAD LEADER <br>FAVORITE GAME: BATTLEFIELD 4",
        skills: "AIM: 99% | REFLEXES: 99% | TACTICS: 90% | STATUS: UNSTOPPABLE",
        system: "OS: MAJED-OS v4.0.0 <br>ENCRYPTION: AES-256-B&W <br>CONNECTION: SECURE (14ms)",
        clear: "CLEAR"
    };

    cmdInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const inputVal = cmdInput.value.trim().toLowerCase();
            
            if (inputVal !== "") {
                // طباعة الأمر الذي كتبه المستخدم
                const userLine = document.createElement("p");
                userLine.className = "white-glow animate-text";
                userLine.innerHTML = `root@opsMAJED:~$ ${cmdInput.value}`;
                terminalLog.appendChild(userLine);

                // معالجة الأمر
                if (inputVal === "clear") {
                    terminalLog.innerHTML = "";
                } else if (commands[inputVal]) {
                    const responseLine = document.createElement("p");
                    responseLine.className = "animate-text";
                    responseLine.innerHTML = commands[inputVal];
                    terminalLog.appendChild(responseLine);
                } else {
                    const errorLine = document.createElement("p");
                    errorLine.className = "animate-text";
                    errorLine.style.color = "#888888"; // رمادي متناسق مع الأبيض والأسود
                    errorLine.innerHTML = `Command not found: '${inputVal}'. Type 'help' for options.`;
                    terminalLog.appendChild(errorLine);
                }

                // تفريغ المدخلات والنزول التلقائي لأسفل الترمينال
                cmdInput.value = "";
                terminalScreen.scrollTop = terminalScreen.scrollHeight;
            }
        }
    });

    // إبقاء التركيز (Focus) على حقل الكتابة عند الضغط في أي مكان داخل الترمينال
    terminalScreen.addEventListener("click", () => {
        cmdInput.focus();
    });
});