// แสดงป๊อปอัป
function openPopup(imgSrc) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    popupImg.src = imgSrc; // ใส่รูปที่ต้องการแสดงในป๊อปอัป
    popup.style.display = "flex"; // แสดงป๊อปอัป
}

// ปิดป๊อปอัป
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // ซ่อนป๊อปอัป
}
