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
| **Mã bài tập (ví dụ HW#00, HW#02):** |HW02 |
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
| **Artifact #1**<br>Thời Gian: 13/08/2026 21:24<br>Công cụ: Antigravity<br>Prompt: "Tạo kịch bản Load test cho Read-heavy, kiếm 1 API khác thay vào không trùng..." | Tạo ra file `test-plans/23127376_Load_20260813.jmx` và `data/orders.csv` để test API `GET /api/orders/:id` | VALID | Kịch bản cấu hình đúng số lượng threads và timer. Dữ liệu CSV chuẩn. | |
| **Artifact #2**<br>Thời Gian: 13/08/2026 21:24<br>Công cụ: Antigravity<br>Prompt: "Tạo kịch bản Stress test cho Auth-heavy POST /api/login" | Tạo ra file `test-plans/23127376_Stress_20260813.jmx` và `data/login.csv` | VALID | Tạo đúng payload JSON và đọc CSV chuẩn. | |
| **Artifact #3**<br>Thời Gian: 13/08/2026 21:24<br>Công cụ: Antigravity<br>Prompt: "Tạo kịch bản Spike test cho POST /api/checkout, JMeter tự động gọi API Login lấy Token..." | Tạo ra file `test-plans/23127376_Spike_20260813.jmx` và `data/checkout.csv` sử dụng JSON Extractor lấy Token. | VALID | Script tự động login, extract token và pass vào Bearer Header của request Checkout chính xác. | |
| **Artifact #4** | | | | |
| **Artifact #5** | | | | |
| **Artifact #6** | | | | |

---

## 4. Tổng kết Độ chính xác AI
*Tổng hợp verdict từ Mục 3 và điền vào bảng dưới.*

| Chỉ số | Số lượng | Tỉ lệ |
| :--- | :---: | :---: |
| **Tổng artifact AI sinh đã audit** | | 100\% |
| **VALID** *(đúng, dùng nguyên)* | | % |
| **INVALID** *(sai; loại bỏ)* | | % |
| **INCOMPLETE** *(chấp nhận sau khi sửa)* | | % |

---

## 5. Kết luận — Khi nào nên / không nên dùng AI?
*Viết 80–150 chữ mô tả pattern quan sát được. AI mạnh ở đâu? AI sai ở đâu? Khuyến nghị của bạn cho việc dùng AI trong loại công việc này?*

................................................................................................................................................................................................
................................................................................................................................................................................................
................................................................................................................................................................................................

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
| **Ngày:** | |
| **Chữ ký:** | |

---

## Tham khảo
* Kharbach, M. (2026). AI Use Policy Templates for Higher Education. CC BY-NC-SA 4.0.
* ISTQB Foundation Level Syllabus (latest version).
* Hardman, P. (2025). A Post-AI Learning Taxonomy.
* Fuster Rabella, M. (2025). OECD Education Working Paper No. 338.
* Perkins, M., Roe, J., & Furze, L. (2025). AI Assessment Scale.
* Anthropic (2025). Building reliable AI test agents — engineering blog.
* DeepEval & Promptfoo documentation — testing frameworks for LLM systems.