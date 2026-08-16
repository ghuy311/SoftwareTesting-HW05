# Đánh giá Báo cáo của AI (Thực hiện bởi Sinh viên)

Sau khi kiểm tra đối chiếu báo cáo phân tích hiệu năng do AI tạo ra (`ai_analysis_raw.md`) với kết quả thực tế, em nhận thấy AI đã đọc sai một số dữ liệu (misinterpretations) và đưa ra những đề xuất chưa phù hợp với thực tế hệ thống (hallucinated). Dưới đây là phần đính chính và đánh giá chi tiết:

## 1. Đính chính các số liệu AI đọc sai (Misinterpretations)

### Lỗi 1: Tỉ lệ lỗi trong kịch bản Tải nhẹ (Load Test)
- **AI báo cáo:** "Tỉ lệ lỗi (Error Rate): 2.0% ... thỉnh thoảng máy chủ vẫn bị quá tải nhẹ và rớt kết nối mạng."
- **Số liệu thực tế (từ file .jtl):** Tỉ lệ lỗi thực sự là **0%**. Toàn bộ các yêu cầu `GET /api/users/me` đều được xử lý thành công (mã trạng thái HTTP 200 OK).
- **Giải thích:** AI đã tự suy diễn (hallucinate) ra con số 2.0% để làm lý do đánh giá máy chủ bị rớt kết nối. Thực tế, với tải 50 người dùng, hệ thống hoạt động hoàn toàn ổn định và không từ chối bất kỳ kết nối nào.

### Lỗi 2: Nguyên nhân gây lỗi trong kịch bản Ép tải (Stress Test)
- **AI báo cáo:** "Tỉ lệ lỗi 94.12% ... chủ yếu xuất phát từ các lỗi `500 Internal Server Error` do cơ sở dữ liệu bị cạn kiệt tài nguyên kết nối."
- **Số liệu thực tế (từ file .jtl):** Trong tệp `stress_result.jtl`, hoàn toàn không xuất hiện lỗi 500. Tất cả các yêu cầu thất bại đều trả về mã lỗi **HTTP 401 (Sai thông tin đăng nhập)** và **HTTP 403 (Tài khoản đã bị khóa)**.
- **Giải thích:** AI không nắm rõ quy tắc nghiệp vụ (đặc tả) của dự án. Hệ thống có tính năng khóa tài khoản (Account Lockout) nếu nhập sai mật khẩu nhiều lần. Do kịch bản Stress Test cố tình gửi sai mật khẩu liên tục, hệ thống đã khóa tài khoản đúng như thiết kế và trả về lỗi 403. Việc AI kết luận lỗi do cơ sở dữ liệu bị quá tải là một sự nhầm lẫn nghiêm trọng.

## 2. Nhận xét các đề xuất tối ưu (Optimizations Evaluation)

### Đề xuất 1: Kích hoạt chế độ WAL cho SQLite -> KHẢ THI (Feasible)
- **Nhận xét:** Đề xuất này **rất phù hợp và khả thi**. Mặc định, SQLite sẽ khóa toàn bộ tệp cơ sở dữ liệu khi có thao tác ghi dữ liệu (ví dụ: tạo đơn hàng). Trong kịch bản Spike Test (nhiều người thanh toán cùng lúc), việc này gây ra hiện tượng xếp hàng chờ đợi lâu. Kích hoạt lệnh `PRAGMA journal_mode=WAL;` sẽ cho phép hệ thống đọc và ghi đồng thời, giúp cải thiện tốc độ xử lý rất nhiều.

### Đề xuất 2: Triển khai Redis Cache -> CHƯA PHÙ HỢP (Hallucinated)
- **Nhận xét:** Đề xuất này có phần **phức tạp hóa vấn đề (over-engineering)** và không phù hợp với kiến trúc hiện tại của dự án đồ án môn học.
- **Lý do:** Thứ nhất, hệ thống EShop sử dụng thẻ thông hành (JWT Token) để xác thực người dùng thay vì lưu phiên làm việc (Session) trong cơ sở dữ liệu. Thứ hai, quá trình tính toán tổng tiền thanh toán được thực hiện trực tiếp khi gọi API Checkout, không lưu trữ giỏ hàng phức tạp trong cơ sở dữ liệu. Việc tích hợp thêm hệ thống Redis là không cần thiết và không giải quyết đúng nguyên nhân làm chậm hệ thống.

## 3. Các lỗi phần mềm (Bugs) phát hiện trong quá trình kiểm thử

Bên cạnh việc thực hiện kiểm thử theo yêu cầu, em cũng ghi nhận được 2 lỗi (Bug) thực tế trong hệ thống SUT:

1. **Lỗi Logic Backend (Khóa tài khoản sai quy định):** Theo yêu cầu, tài khoản chỉ bị khóa nếu nhập sai mật khẩu từ 3 lần trở lên. Tuy nhiên, mã nguồn API `POST /api/login` lại cộng dồn 2 đơn vị cho mỗi lần nhập sai (`newAttempts = user.login_attempts + 2;`). Hậu quả là tài khoản bị khóa ngay sau **2 lần nhập sai**.
2. **Lỗi Hiển thị Frontend (Che giấu thông báo lỗi từ Backend):** Mặc dù Backend trả về mã lỗi 403 cùng thông báo *"Tài khoản đã bị khóa"*, giao diện Frontend (React) lại bắt lỗi không đầy đủ và luôn hiển thị một câu thông báo chung chung: *"Đăng nhập thất bại. Vui lòng kiểm tra lại"*. Điều này gây hiểu lầm, khiến người dùng không biết rằng tài khoản của họ đã bị khóa.
