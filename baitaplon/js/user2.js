// Kiểm tra mật khẩu
if (passInput.trim() === "") {
    errpass.innerHTML = "* Mật khẩu không được để trống";
    return false;
}
errpass.innerHTML = "";

// Lấy thông tin tài khoản từ Local Storage
let userAccount = JSON.parse(localStorage.getItem('userAccount'));

// Kiểm tra xem thông tin người dùng đã lưu có tồn tại không
if (userAccount) {
    if (tenDNInput === userAccount.username && passInput === userAccount.password) {
        alert("Đăng nhập thành công!");
        // Chuyển hướng đến trang chủ hoặc trang khác
        window.history.back();
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
} else {
    alert("Chưa có tài khoản nào được đăng ký!");
}
