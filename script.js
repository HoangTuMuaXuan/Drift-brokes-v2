const bodyElement = document.body;
const savedTheme = localStorage.getItem('theme') || 'light';

localStorage.setItem('theme', savedTheme);

// 1. NGAY KHI VỪA MỞ TRANG: Kiểm tra bộ nhớ xem người dùng đang chọn giao diện gì
if (savedTheme === 'dark') {
    bodyElement.classList.add('dark-mode');
} else {
    bodyElement.classList.remove('dark-mode');
}

// 2. Tự động thêm header và kết nối nút đổi giao diện
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#site-header");
    const isTopSan = window.location.pathname.includes("/topsan/");
    const homeHref = isTopSan ? "../Trangchu.html" : "Trangchu.html";
    const tracuuHref = isTopSan ? "../tracuu.html" : "tracuu.html";
    const forexTopHref = isTopSan ? "Topsanforexuytin.html" : "topsan/Topsanforexuytin.html";
    const topicHref = isTopSan ? "../tracuu.html?category=" : "tracuu.html?category=";

    const homeNavItem = `<li><a href="${tracuuHref}" class="btn-outline">Tra cứu ngay</a></li>`;
    if (!header) return;

    header.innerHTML = `
        <a href="${homeHref}" class="logo" aria-label="Về trang chủ">Drift Brokers Match</a>
        <nav>
            <ul class="nav-links">
                ${homeNavItem}
                <li class="dropdown">
                    <a href="/index/topsan/topsan.html">Top sàn ▾</a>
                    <ul class="dropdown-content">
                        <li><a href="${forexTopHref}">Top Sàn Forex Uy Tín</a></li>
                        <li><a href="${topicHref}vang">Top Sàn Giao Dịch Vàng</a></li>
                        <li><a href="${topicHref}co-phieu">Top Sàn Giao Dịch Cổ Phiếu</a></li>
                        <li><a href="${topicHref}nguoi-moi">Top Sàn Giao Dịch Cho Người Mới</a></li>
                        <li><a href="${topicHref}copy-trade">Top Sàn Giao Dịch Hỗ Trợ Copy Trade</a></li>
                        <li><a href="${topicHref}scalping">Top Sàn Giao Dịch Scalping</a></li>
                    </ul>
                </li>
                <li><a href="#">So sánh</a></li>
                <li><a href="#">Cộng đồng</a></li>
                <li><a href="#">Kiến thức</a></li>
            </ul>
        </nav>
        <a href="#" class="btn-login">ĐĂNG NHẬP</a>
        <button id="btn-doi-mau" class="theme-btn">🌙</button>
    `;

    const button = document.querySelector("#btn-doi-mau");
    button.textContent = bodyElement.classList.contains('dark-mode') ? '☀️' : '🌙';

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        button.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});