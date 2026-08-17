---
name: eshop-performance-tester
description: >-
  Kỹ năng tự động hóa quy trình Kiểm thử Hiệu năng (Performance Testing) tái sử dụng cho bất kỳ API endpoint nào (Read-heavy, Auth-heavy, Transactional, Admin CRUD). Tự động phân tích OpenAPI/API specification, sinh dữ liệu động qua API setup/seed script, tạo kịch bản JMeter (Load/Stress/Spike) và phân tích log `.jtl` chính xác.
---

# Quy Trình Tự Động Hóa Kiểm Thử Hiệu Năng API (General Performance Testing Skill)

Kỹ năng này cung cấp quy trình (workflow) tổng quát cho Agent để thiết kế, chuẩn bị dữ liệu, thực thi và phân tích kiểm thử hiệu năng cho **bất kỳ nhóm REST API nào** thuộc hệ thống SUT.

## 1. Phân Tích & Xác Định Nhóm API (API Scope Analysis)
Khi nhận yêu cầu kiểm thử cho một API hoặc Workflow bất kỳ:
1. Đọc file mô tả API (`api_specification.md` hoặc Swagger/OpenAPI spec) để xác định:
   - **HTTP Method & URL Path** (ví dụ: `GET /api/products`, `POST /api/login`, `POST /api/checkout`, `PUT /api/admin/products/:id`).
   - **Headers & Authentication:** Xác định xem API có yêu cầu Token (Bearer JWT / Session Cookie) hay không.
   - **Payload Schema:** Định dạng JSON body, URL parameters, hoặc Form-data.
2. Xác định **Loại Kịch Bản Kiểm Thử** tương ứng:
   - **Read-heavy (Xem/Tìm kiếm):** Tập trung đo Latency p95, Throughput (RPS) ở mức tải ổn định (**Load Test**).
   - **Auth-heavy (Đăng nhập/Xác thực):** Tập trung kiểm tra giới hạn chịu tải, logic khóa tài khoản/rate limit (**Stress Test**).
   - **Transactional (Thêm giỏ hàng/Thanh toán/Tạo đơn):** Tập trung đo độ ổn định khi tải tăng đột biến (**Spike Test**).

## 2. Sinh Dữ Liệu Động Đúng Chuẩn (Generic Dynamic Data Generation)
1. **Không tạo dữ liệu ngẫu nhiên giả mạo (dummy static data):** Dữ liệu test phải hợp lệ với DB thực tế.
2. **Quy trình sinh dữ liệu linh hoạt (Data Seeding Strategy):**
   - **Nếu test API yêu cầu Đăng nhập/Xác thực:** Chạy script khởi tạo (Node.js/Python) đăng ký/tạo các tài khoản thực qua API Auth, xuất ra file CSV (`data/<scenario>_auth.csv`).
   - **Nếu test API Transactional (Thanh toán/Giỏ hàng):** Sinh danh sách Product ID thực đang tồn tại trong Database kèm thông tin tài khoản mua hàng xuất ra CSV (`data/<scenario>_payload.csv`).
   - **Nếu test API Read-heavy (Xem sản phẩm/Profile):** Sinh file CSV chứa danh sách ID/Token/Search Query hợp lệ.
3. **Phân tách CSV:** Mỗi kịch bản/endpoint group dùng file CSV riêng biệt, không dùng chung 1 file CSV.

## 3. Thiết Lập Kịch Bản JMeter Chống Lỗi (.jmx Test Plan Rules)
1. Đặt tên file test plan đúng quy chuẩn: `{StudentID}_{ScenarioType}_{YYYYMMDD}.jmx`.
2. **Tham số hóa (Parameterization):**
   - Load Test: Ramp-up êm (ví dụ: 10-30s), duy trì tải 60-120s.
   - Stress Test: Ramp-up theo nấc thang (step-up) để tìm điểm gãy (breaking point).
   - Spike Test: Tăng vọt số user trong thời gian rất ngắn (1-5s).
3. **Quy tắc vàng cấu hình CSV Dataset:**
   - Đặt `shareMode` thành `shareMode.thread` cho các kịch bản chạy song song/spike.
   - Luôn bọc ngoặc kép cho các biến JSON body (ví dụ: `"${variable}"`) để tránh lỗi trích xuất EOF hoặc sai định dạng JSON.
4. **Sử dụng đa dạng Report Views:** Áp dụng ít nhất 3 loại Listener khác nhau giữa các test plan (View Results Tree, Summary Report, Aggregate Report).

## 4. Phân Tích Log .jtl & Phản Biện Độc Lập (Log Analysis & Anti-Hallucination)
1. Đọc và phân tích trực tiếp file `.jtl` gốc (không chỉ nhìn báo cáo tổng hợp):
   - Tính toán chỉ số chính xác: Total Requests, Error Rate (%), Mean Latency, p95 Latency, Throughput (RPS).
2. Phân loại mã lỗi chính xác:
   - `401 Unauthorized`: Lỗi thiếu hoặc hết hạn Token.
   - `403 Forbidden`: Lỗi phân quyền hoặc kích hoạt cơ chế khóa tài khoản (Account Lockout).
   - `500 / 502 / 503`: Lỗi sập backend hoặc quá tải database connection/lock.
3. **Quy tắc chống ảo giác (Anti-Hallucination):**
   - Đề xuất tối ưu phải căn cứ vào kiến trúc thực của SUT. Nếu SUT dùng Node.js + SQLite, chỉ đề xuất giải pháp khả thi (như SQLite WAL mode, database index, prepared statement). Không ảo giác đề xuất các hạ tầng không liên quan như Redis cluster, Kafka hay microservices trừ khi được yêu cầu.
