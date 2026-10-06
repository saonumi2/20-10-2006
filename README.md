# Dear you — nhiều món quà 20/10

Một bộ hiệu ứng dùng chung, mỗi người có một thư mục nội dung riêng. Web chạy tĩnh trên GitHub Pages, không cần mở port hay chạy Node.js trên GitHub.

## Đường dẫn

- Bản hiện tại: `https://xxx.github.io/ten-repo/anh-ruong/`.
- Người khác: `https://xxx.github.io/ten-repo/ten-nguoi-khac/`.
- Trang gốc `https://xxx.github.io/ten-repo/` chỉ hiện lời nhắc mở đường dẫn được gửi, không tự mở món quà của ai.

## Cấu trúc

```text
nttl/
├── index.html                 Trang gốc
├── .nojekyll                  Để GitHub Pages phục vụ web tĩnh
├── app.js                     Mở quà, icon rơi, ảnh và nhạc dùng chung
├── character.js               Cảnh 3D và bàn xoay dùng chung
├── styles.css                 Giao diện dùng chung
├── assets/
│   ├── fonts/                 Font và giấy phép
│   ├── vendor/                Three.js, GLTFLoader, Meshopt và giấy phép
│   └── utils/                 Tiện ích của GLTFLoader
└── anh-ruong/
    ├── index.html             Trang quà của người này
    ├── config.js              Tên, lời chúc và danh sách ảnh riêng
    └── assets/
        ├── character.glb      Mô hình 3D riêng
        ├── a.mp3              Nhạc riêng
        └── a1.jpg … a5.jpg     Ảnh riêng
```

`START.bat`, `start.ps1`, `server.cjs` và `package.json` phục vụ chạy thử trên máy. Có thể để chúng trong repository; GitHub Pages không cần chạy các file này.

## Thêm một người

1. Sao chép **thư mục `anh-ruong` bên trong `nttl`** sang thư mục mới, cùng cấp, chẳng hạn `linh`.
2. Sửa `linh/config.js`: `recipient`, `wish`, `signature`, tiêu đề và lời nhắn của từng ảnh. Tên trong lời chúc cũng cần sửa cho đúng người.
3. Thay ảnh, nhạc và GLB trong `linh/assets/`.
4. Gửi đường dẫn `https://xxx.github.io/ten-repo/linh/`.

Không cần thêm trang vào danh sách hay chỉnh code dùng chung. Mỗi trang tự tải `config.js` ngay trong thư mục của mình. Đường dẫn trong config như `assets/a1.jpg` là đường dẫn đến ảnh của người đó. Nếu dùng tên file khác, sửa đường dẫn tương ứng trong config.

Giữ mỗi người ở **một thư mục cùng cấp**, không lồng thư mục người này vào người khác. Khi chỉ sửa hiệu ứng, sửa `app.js`, `character.js` hoặc `styles.css` ở gốc để áp dụng cho tất cả.

## Chạy trên máy

Nhấp đôi `START.bat`: tự mở bản hiện tại tại **http://127.0.0.1:5173/anh-ruong/**. Trình khởi động dùng lại server nếu đã chạy; Node.js chạy nền và log nằm trong thư mục tạm của Windows.

Hoặc chạy `npm start` tại `nttl`, rồi tự mở đường dẫn của từng người. Với thư mục `linh`, địa chỉ là **http://127.0.0.1:5173/linh/**. Nhấn Ctrl+C để dừng server trong terminal.

Không mở HTML bằng `file://`; trình duyệt cần HTTP để tải module và GLB.

## Đưa lên GitHub Pages

Upload **nội dung bên trong `nttl`** vào gốc repository, gồm `.nojekyll`, các file dùng chung, `assets/` và các thư mục người nhận. Bật **Settings → Pages → Deploy from a branch → main → /(root)**. Giữ cấu trúc thư mục nguyên vẹn. Không cần build hay `npm install`.

Tên `ten-repo` được GitHub thêm vào URL; không tạo thêm thư mục `ten-repo` bên trong project. Các đường dẫn tương đối đã hỗ trợ việc chạy dưới `/ten-repo/`.

## Hành vi của mỗi món quà

- Mở hộp quà để hiện mô hình GLB và lời chúc.
- Nhân vật tự xoay 0,5 radian/giây; kéo để xoay theo tay, thả ra tự xoay tiếp.
- Bộ emoji 💌 🌷 🎀 💗 🎁 rơi khắp trái, giữa và phải, không có nền tròn.
- Bấm icon mở ảnh 1 → 2 → 3 → 4 → 5, rồi lặp lại. Ảnh đã mở được thêm bên dưới, không trùng.
- Nhãn dưới ảnh và trong popup là `memory`; không có nút chuyển trang.
- Gói quà lại xóa ảnh đã mở và bắt đầu lại từ ảnh 1.
- Cài đặt giảm chuyển động của thiết bị tắt tự xoay và hiệu ứng bay.

Mô hình của bản hiện tại dùng Meshopt; decoder đã có trong thư viện dùng chung. GLB có thể tải lâu khi mạng chậm, trang có hiển thị tiến độ.

Thư viện: Three.js 0.160.1 và Meshopt, giữ nguyên giấy phép đi kèm. Font Lora và Be Vietnam Pro được lưu cục bộ, kèm SIL Open Font License. Kiểm tra cú pháp bản hiện tại: `npm run check`.
