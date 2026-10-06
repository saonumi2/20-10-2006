// Sửa tên, lời chúc, ảnh và màu nhân vật tại đây.
// Ảnh và nhạc hiện được lấy từ bản mẫu anh-ruong.
window.GIFT_CONFIG = {
  recipient: 'Ánh Dương',
  wish: 'Chúc cậu một ngày 20/10 thật vui! Mong cậu luôn tự tin, rạng rỡ và làm được những điều mình thích. Chúc những dự định sắp tới đều thuận lợi, mỗi ngày có thêm nhiều niềm vui và những kỷ niệm đáng nhớ cùng bạn bè nhé!',
  signature: 'Từ một người bạn của cậu ✿',
  // Đã sao chép mô hình GLB của bạn vào assets/character.glb.
  // frontAngle tính bằng độ; sửa nếu mặt trước mô hình đang quay sai hướng.
  character: { model: 'assets/character.glb', frontAngle: -90, height: 2.8, autoRotateSpeed: 0.5 },
  fallingIcons: ['💌', '🌷', '🎀', '💗', '🎁'],
  memories: [
    { image: 'assets/a1.jpg', title: 'Một ngày thật xinh', text: 'Chúc Ánh Dương luôn vui vẻ, xinh đẹp và tràn đầy năng lượng tích cực!', alt: 'Tấm ảnh kỷ niệm số 1' },
    { image: 'assets/a2.jpg', title: 'Bình yên dành cho cậu', text: 'Chúc cậu luôn an yên, rạng rỡ và làm được những điều khiến cậu hạnh phúc!', alt: 'Tấm ảnh kỷ niệm số 2' },
    { image: 'assets/a3.jpg', title: 'Cậu thật tuyệt vời', text: 'Cảm ơn cậu vì đã luôn mạnh mẽ và tuyệt vời như thế. Nhớ dịu dàng với chính mình nữa nhé!', alt: 'Tấm ảnh kỷ niệm số 3' },
    { image: 'assets/a4.jpg', title: 'Thêm một chút niềm vui', text: 'Chúc cậu một ngày 20/10 thật vui, có quà xinh và nhiều điều bất ngờ thú vị!', alt: 'Tấm ảnh kỷ niệm số 4' },
    { image: 'assets/a5.jpg', title: 'Mọi điều thuận lợi nhé!', text: 'Chúc cậu học tập và công việc đều thuận lợi. Sớm thực hiện được những điều mình đang ấp ủ nhé!', alt: 'Tấm ảnh kỷ niệm số 5' }
  ]
};
