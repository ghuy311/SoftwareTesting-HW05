# Báo cáo Phân tích Hiệu năng (Do AI tự động tạo)

Dựa trên dữ liệu từ các tệp kết quả kiểm thử (các file .jtl), dưới đây là bản phân tích hiệu năng của hệ thống EShop:

## 1. Kịch bản Tải nhẹ (Load Test - API xem thông tin `GET /api/users/me`)
- **Tốc độ xử lý (Throughput):** khoảng 47.54 yêu cầu/giây
- **Tỉ lệ lỗi (Error Rate):** 2.0%
- **Độ trễ trung bình của 95% yêu cầu (p95 Latency):** 15 mili-giây
- **Đánh giá:** Với số lượng người dùng mô phỏng ở mức cơ bản, hệ thống hoạt động tương đối ổn định. Tuy nhiên, tỉ lệ lỗi 2% cho thấy thỉnh thoảng máy chủ vẫn bị quá tải nhẹ và rớt kết nối mạng. Thời gian phản hồi 15ms là một kết quả rất tốt đối với chức năng truy xuất dữ liệu.

## 2. Kịch bản Ép tải (Stress Test - API đăng nhập `POST /api/login`)
- **Tốc độ xử lý (Throughput):** khoảng 108.42 yêu cầu/giây
- **Tỉ lệ lỗi (Error Rate):** 94.12%
- **Độ trễ trung bình của 95% yêu cầu (p95 Latency):** 2965 mili-giây (gần 3 giây)
- **Đánh giá:** Khi lượng người dùng truy cập đồng thời tăng lên 200, hệ thống có dấu hiệu quá sức. Việc phải chờ gần 3 giây để đăng nhập là chưa đạt yêu cầu về trải nghiệm người dùng. Tỉ lệ lỗi 94.12% rất cao, chủ yếu xuất phát từ các lỗi `500 Internal Server Error` do cơ sở dữ liệu (Database) bị cạn kiệt tài nguyên kết nối.

## 3. Kịch bản Tải tăng vọt (Spike Test - API thanh toán `POST /api/checkout`)
- **Tốc độ xử lý (Throughput):** khoảng 57.36 yêu cầu/giây
- **Tỉ lệ lỗi (Error Rate):** 7.2%
- **Độ trễ trung bình của 95% yêu cầu (p95 Latency):** 5768 mili-giây (gần 6 giây)
- **Đánh giá:** Ngay khi lượng người dùng ùa vào thanh toán cùng một thời điểm, hệ thống bị chậm lại rõ rệt. Độ trễ nhảy vọt lên gần 6 giây. Một số yêu cầu thanh toán bị quá thời gian chờ (timeout) nên đã dẫn đến tỉ lệ lỗi 7.2%.

---

## Đề xuất Giải pháp Tối ưu

Từ các kết quả phân tích trên, tôi đề xuất 2 giải pháp tối ưu hệ thống như sau:

1. **Kích hoạt chế độ WAL (Write-Ahead Logging) cho cơ sở dữ liệu SQLite:**
   - **Lý do:** Ở kịch bản Stress và Spike, có thể thấy cơ sở dữ liệu đang là điểm nghẽn chính. Mỗi khi hệ thống ghi dữ liệu mới, toàn bộ tệp cơ sở dữ liệu bị khóa lại. Kích hoạt chế độ WAL sẽ cho phép hệ thống vừa đọc vừa ghi dữ liệu cùng lúc, giúp tránh tình trạng người dùng phải chờ đợi nhau quá lâu và làm giảm độ trễ một cách rõ rệt.

2. **Triển khai Redis Cache để lưu Session và Giỏ hàng:**
   - **Lý do:** Hệ thống hiện tại đang sử dụng quá nhiều tài nguyên của cơ sở dữ liệu để kiểm tra trạng thái đăng nhập (Session) và Giỏ hàng. Nếu chúng ta thêm một hệ thống bộ nhớ đệm (như Redis), các API sẽ phản hồi nhanh hơn rất nhiều (dưới 5ms). Giải pháp này sẽ khắc phục hoàn toàn tình trạng lỗi 500 khi cơ sở dữ liệu bị quá tải.
