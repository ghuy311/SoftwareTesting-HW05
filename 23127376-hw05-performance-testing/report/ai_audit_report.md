# AI Audit Report — Mẫu 5 mục cho mỗi Artifact

*Phụ lục bắt buộc đính kèm cho mọi bài tập có dùng AI (HW#01–HW#06, Seminar).*
*Tài liệu được biên soạn lại từ Med Kharbach, PhD (2026) — Mẫu Chính sách Sử dụng AI cho Giáo dục Đại học.*
*Giấy phép CC BY-NC-SA 4.0. Phiên bản này được FIT@HCMUS điều chỉnh cho môn CS423 / CSC15003 Kiểm chứng Phần mềm.*

---

## 1. Thông tin Sinh viên

| Mục | Giá trị |
| :--- | :--- |
| **Họ tên sinh viên (in hoa):** |HỒ GIA HUY |
| **MSSV:** | 23127376 |
| **Lớp / Khoá:** |23KTPM2 / 23CLC |
| **Mã bài tập:** |HW05 |
| **Ngày làm bài:** |13/08/2026 |
| **Công cụ AI đã dùng:** | Antigravity |
| **Công cụ AI đã dùng:** | `[X] Có`  `[] Không` |

---

## 2. Hướng dẫn (đọc trước khi điền)
* Thêm 1 hàng cho mỗi artifact AI sinh (test case, script, checklist, OpenAPI spec, JMeter plan…).
* Dán nguyên văn prompt — **KHÔNG** paraphrase.
* Dán nguyên văn output AI (hoặc kèm screenshot có chú thích trong báo cáo).
* Gắn nhãn: `VALID` / `INVALID` / `INCOMPLETE`.
* Lý do phải dẫn chiếu slide, mục ISTQB, hoặc RFC kỹ thuật.
* Hiển thị bản sửa với phần thay đổi được tô sáng.
* *Hàng mẫu in nghiêng — thay trước khi nộp.*

---

## 3. Bảng Audit — 1 hàng / artifact

| (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do (ISTQB) | (5) Bản SV sửa |
| :--- | :--- | :--- | :--- | :--- |
| **Artifact #1**<br>Thời Gian: 13/08/2026 22:21<br>Công cụ: Antigravity<br>Prompt: "Tạo kịch bản Load test cho GET /api/users/me, tự động login lấy token" | Tạo ra file `test-plans/23127376_Load_20260813.jmx` và `data/users.csv` | VALID | Kịch bản cấu hình đúng số lượng threads và timer. Tự động Login và truyền Bearer Token đúng chuẩn. | |
| **Artifact #2**<br>Thời Gian: 13/08/2026 22:21<br>Công cụ: Antigravity<br>Prompt: "Tạo kịch bản Stress test cho POST /api/login test lockout" | Tạo ra file `test-plans/23127376_Stress_20260813.jmx` và `data/login.csv` | VALID | CSV có chứa password sai để trigger lockout theo đúng đặc tả FR-02. | |
| **Artifact #3**<br>Thời Gian: 13/08/2026 22:21<br>Công cụ: Antigravity<br>Prompt: "Tạo kịch bản Spike test cho POST /api/checkout tự lấy Token" | Tạo ra file `test-plans/23127376_Spike_20260813.jmx` và `data/checkout.csv` | VALID | Script tự động login, extract token bằng JSON Extractor và pass vào Checkout chính xác. | |
| **Artifact #4**<br>Thời Gian: 13/08/2026 21:52<br>Công cụ: Antigravity<br>Prompt: "tôi không lưu được summary report / jtl is empty" | Giải thích nguyên nhân do JMeter không tự tạo thư mục `results/load` và hướng dẫn SV tạo thư mục thủ công. | VALID | Khắc phục được lỗi không lưu được log của JMeter. | |
| **Artifact #5**<br>Thời Gian: 13/08/2026 22:15<br>Công cụ: Antigravity<br>Prompt: "đọc API_Specfication và đọc đề Hw05 rồi chọn lại cho tôi 3 API không trùng với 2 thành viên còn lại" | Tạo mới toàn bộ 3 file JMX cho `users/me`, `login`, `checkout` và 3 file CSV tương ứng. | VALID | Chọn lọc API chuẩn xác theo đặc tả, giải quyết triệt để vấn đề đụng độ API với thành viên trong nhóm. | |
| **Artifact #6**<br>Thời Gian: 13/08/2026 22:23<br>Công cụ: Antigravity<br>Prompt: "rồi giờ bạn xoá những file không liên quan đi" | Thực thi lệnh xoá `orders.csv`, `products.csv` và các file mã nguồn nháp sinh JMX. | VALID | Dọn dẹp workspace sạch sẽ, tránh nhầm lẫn dữ liệu giữa các lần cấu hình. | |
| **Artifact #7**<br>Thời Gian: 16/08/2026<br>Công cụ: Antigravity<br>Prompt: "khi test spike thì bên backend SUT bị như sau SyntaxError: Unexpected token '<'" | Sửa file `23127376_Spike_20260813.jmx`, đổi `shareMode` thành `thread` và thêm ngoặc kép cho JSON. | VALID | Xử lý triệt để lỗi parse JSON do tranh chấp file CSV giữa các Thread. | |
| **Artifact #8**<br>Thời Gian: 16/08/2026<br>Công cụ: Antigravity<br>Prompt: "sao tôi test trên frontend lại không bị" | Gọi Browser agent truy cập `localhost:5174`, phát hiện lỗi Frontend che giấu thông báo 403 Forbidden. | VALID | Phân tích sâu nguyên nhân khác biệt giữa log Backend và giao diện người dùng. | |
| **Artifact #9**<br>Thời Gian: 16/08/2026<br>Công cụ: Antigravity<br>Prompt: "trong folder analysis có 2 file hãy sử dụng các từ ngữ phổ thông mà không nặng về thuật ngữ" | Viết lại file `ai_analysis_raw.md` và `misinterpretation_review.md` với ngôn từ dễ hiểu cho sinh viên. | VALID | Điều chỉnh văn phong phù hợp với yêu cầu báo cáo học thuật sinh viên. | |
| **Artifact #10**<br>Thời Gian: 16/08/2026<br>Công cụ: Antigravity<br>Prompt: "bản này cũng không hay không rõ flow phải CI, rồi run test rồi ...vv chứ" | Cập nhật file `continuous_perf_testing.md`, vẽ biểu đồ Mermaid chuẩn luồng CI/CD công nghiệp. | VALID | Thiết kế luồng CI/CD chuyên nghiệp, bổ sung Quality Gate và cảnh báo. | |
---

## 4. Tổng kết Độ chính xác AI
*Tổng hợp verdict từ Mục 3 và điền vào bảng dưới.*

| Chỉ số | Số lượng | Tỉ lệ |
| :--- | :---: | :---: |
| **Tổng artifact AI sinh đã audit** | 10 | 100% |
| **VALID** *(đúng, dùng nguyên)* | 10 | 100% |
| **INVALID** *(sai; loại bỏ)* | 0 | 0% |
| **INCOMPLETE** *(chấp nhận sau khi sửa)* | 0 | 0% |

---

## 5. Kết luận — Khi nào nên / không nên dùng AI?
*Viết 80–150 chữ mô tả pattern quan sát được. AI mạnh ở đâu? AI sai ở đâu? Khuyến nghị của bạn cho việc dùng AI trong loại công việc này?*

Qua quá trình sử dụng công cụ AI (Antigravity) để thiết lập và khởi tạo các kịch bản kiểm thử hiệu năng (JMeter test plans) và dữ liệu mô phỏng (CSV files), em nhận thấy AI thể hiện sức mạnh vượt trội trong việc nhanh chóng viết các tệp cấu hình XML phức tạp và tạo sinh tập dữ liệu lớn tuân thủ đúng định dạng yêu cầu. Đặc biệt, AI có khả năng liên kết các yêu cầu nghiệp vụ (như trích xuất Token sau khi Login) để cấu hình chính xác các thành phần như JSON Extractor hay HTTP Header Manager trong JMeter.

Tuy nhiên, AI vẫn phụ thuộc rất nhiều vào prompt đầu vào và ngữ cảnh. Nếu không cung cấp rõ file đặc tả API (API Specification) hoặc giới hạn về các API đã bị thành viên khác chọn, AI có thể sinh ra các kịch bản trùng lặp hoặc gọi sai endpoint. 

**Khuyến nghị:** Rất nên sử dụng AI để tự động hóa việc viết boilerplate code (JMX, CSV data), giúp tiết kiệm thời gian đáng kể. Tuy nhiên, người kiểm thử vẫn phải là người định hướng chiến lược (chọn đúng API cần test, quyết định tải trọng) và review kỹ lưỡng cấu trúc HTTP Request trước khi bấm chạy thực tế.

---

## 6. Mandatory Disclosure (dán nguyên văn)

> "[Test case / script / dataset / báo cáo] này được sinh phiên bản đầu bởi [tên công cụ AI]; tôi đã rà soát và chỉnh sửa [phần X], bổ sung [edge case Y, Z]; [phần W] do tôi tự viết. AI Audit Report chi tiết đính kèm ở Phụ lục A. Tôi cam đoan không dùng AI để sinh bất kỳ artifact nào thuộc danh mục bị cấm."

**Chữ ký:**

| | |
| :--- | :--- |
| **Họ tên sinh viên (in hoa):** |HỒ GIA HUY |
| **MSSV:** |23127376 |
| **Lớp / Khoá:** |23KTPM2 / 23CLC |
| **Môn học:** | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| **Giảng viên:** |LÂM QUANG VŨ |
| **Ngày:** | 13/08/2026 |
| **Chữ ký:** | Huy |

---

## Tham khảo
* Kharbach, M. (2026). AI Use Policy Templates for Higher Education. CC BY-NC-SA 4.0.
* ISTQB Foundation Level Syllabus (latest version).
* Hardman, P. (2025). A Post-AI Learning Taxonomy.
* Fuster Rabella, M. (2025). OECD Education Working Paper No. 338.
* Perkins, M., Roe, J., & Furze, L. (2025). AI Assessment Scale.
* Anthropic (2025). Building reliable AI test agents — engineering blog.
* DeepEval & Promptfoo documentation — testing frameworks for LLM systems.