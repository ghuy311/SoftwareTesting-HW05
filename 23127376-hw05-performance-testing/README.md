    # HW05 - Performance Testing

- **Họ và tên:** Hồ Gia Huy
- **MSSV:** 23127376

## 1. Test Summary Report

| Hạng mục | Chi tiết |
| :--- | :--- |
| **Scenarios Run** | Load Test, Stress Test, Spike Test |
| **Endpoint Groups Covered** | 1. **Read-heavy:** `GET /api/users/me`<br>2. **Auth-heavy:** `POST /api/login`<br>3. **Transactional:** `POST /api/checkout` |
| **Endurance Threshold** | Tải duy trì 120s ở mức ~47 req/s (Load Test) cho p95 latency dưới 15ms. Ngưỡng chịu đựng tối đa trước khi Database bị sập (lỗi 500) là khoảng ~100 req/s. |
| **Number of Bugs/Issues** | **2 Bugs:**<br>1. *Backend Off-by-one Lockout:* Khóa tài khoản (403) sau 2 lần sai thay vì 3 lần.<br>2. *Frontend Error Masking:* UI giấu lỗi 403, luôn hiện "Đăng nhập thất bại". |
| **Demo Video Link** | [https://youtu.be/uCGQ-nenhqQ](https://youtu.be/uCGQ-nenhqQ) |

## 2. Self-Assessment Table

| **No.** | **Criteria** | **Grade** | **Self-Assessed Grade** |
| --- | --- | --- | --- |
| **1** | Task 1 — Load testing | 20 | 20 |
| **2** | Task 1 — Stress testing | 20 | 20 |
| **3** | Task 1 — Spike testing | 20 | 20 |
| **4** | Task 2 — AI analysis + misinterpretation hunt (with correct values from raw logs) | 10 | 10 |
| **5** | Task 3 — Continuous Performance Testing proposal (G9.6) | 10 | 10 |
| **6** | Agent Skills | 10 | 10 |
|  | **Total** | **100** | **100/100** |
