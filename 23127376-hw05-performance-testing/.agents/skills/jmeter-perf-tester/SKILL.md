---
name: eshop-performance-tester
description: >-
  Kỹ năng đặc biệt dùng để tự động hóa quy trình Kiểm thử Hiệu năng (Performance Testing) cho hệ thống EShop. Giúp Agent tự tạo Test Plan, sinh dữ liệu động qua API, và phân tích Log chính xác.
---

# Tự động hóa Kiểm thử Hiệu năng EShop (EShop Perf Tester)

Kỹ năng này cung cấp cho Agent một quy trình (workflow) chuẩn để thực hiện Performance Testing cho dự án Eshop mà không bị mắc các lỗi ngớ ngẩn (như dữ liệu trùng lặp hay ảo giác khi đọc Log).

## Các bước thi hành (Workflow Steps)

### Bước 1: Chuẩn bị Dữ liệu (Dynamic Data Generation)
1. Tuyệt đối **không** tạo file CSV bằng dữ liệu giả mạo (dummy data) ngẫu nhiên vì sẽ lỗi xác thực.
2. Viết một script (Node.js hoặc Python) gọi trực tiếp API `POST /api/register` để đăng ký người dùng thật vào hệ thống SUT.
3. Lưu danh sách email/password vừa đăng ký thành công vào các file `data/users.csv` và `data/login.csv` để JMeter sử dụng.

### Bước 2: Thiết lập Kịch bản JMeter (Test Plan Configuration)
1. Đọc file `api_specification.md` để lấy đúng định dạng JSON payload.
2. Tạo 3 file `.jmx` tương ứng: Load Test, Stress Test, Spike Test.
3. **Quy tắc vàng chống lỗi EOF:** Khi cấu hình Spike Test với JSON body, phải đặt `shareMode` của file CSV thành `shareMode.thread` và dùng ngoặc kép bọc biến (ví dụ: `"${amount}"`).

### Bước 3: Phân tích Log và Rút ra Kết luận (Log Analysis)
1. Đọc file `.jtl` kết quả chạy của JMeter.
2. Lọc các request có mã lỗi (vd: `401`, `403`, `500`) thay vì chỉ nhìn vào tỷ lệ lỗi chung. 
3. Nếu phát hiện lỗi `403 Forbidden` liên tục ở Stress Test, hãy yêu cầu người dùng kiểm tra file mã nguồn Backend (`server.js`) xem có lỗi logic khóa tài khoản không.
4. Xuất báo cáo phân tích Markdown trung thực, tuyệt đối không tự "ảo giác" (hallucinate) ra các giải pháp không liên quan (như thêm Redis, Kafka) nếu hệ thống chỉ dùng SQLite.
