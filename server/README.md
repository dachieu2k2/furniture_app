### Giải thích các thư mục:

- **dist**: Thư mục chứa các file build
- **src**: Thư mục chứa mã nguồn
- **src/constants**: Chứa các file chứa các hằng số
- **src/middlewares**: Chứa các file chứa các hàm xử lý middleware, như validate, check token, ...
- **src/controllers**: Chứa các file nhận request, gọi đến service để xử lý logic nghiệp vụ, trả về response
- **src/services**: Chứa các file chứa method gọi đến database để xử lý logic nghiệp vụ
- **src/models**: Chứa các file chứa các model
- **src/routes**: Chứa các file chứa các route
- **src/utils**: Chứa các file chứa các hàm tiện ích, như mã hóa, gửi email, ...
- Còn lại là những file config cho project như .eslintrc, .prettierrc

### Giải thích thư viện

- **eslint**: Linter (bộ kiểm tra lỗi) chính
- **prettier**: Code formatter chính
- **eslint-config-prettier**: Cấu hình ESLint để không bị xung đột với Prettier
- **eslint-plugin-prettier**: Dùng thêm một số rule prettier cho eslint
- **@typescript-eslint/eslint-plugin**: ESLint plugin cung cấp các rule cho Typescript
- **@typescript-eslint/parser**: Parser cho phép ESLint kiểm tra lỗi Typescript
- **ts-node**: Dùng để chạy TypeScript code trực tiếp mà không cần build
- **tsc-alias**: Xử lý alias khi build
- **tsconfig-paths**: Khi setting alias import trong dự án dùng ts-node thì chúng ta cần dùng tsconfig-paths để nó hiểu được paths và baseUrl trong file tsconfig.json
- **rimraf**: Dùng để xóa folder dist khi trước khi build
- **nodemon**: Dùng để tự động restart server khi có sự thay đổi trong code

### Chạy dự án

1. Chạy dự án trong môi trường dev

```
npm run dev
```

1. Build dự án TypeScript sang JavaScript cho production

```
npm run build
```

Tiếp theo chạy câu lệnh sau để chạy dự án, lưu ý câu lệnh này đòi hỏi bạn phải build trước để có code trong thư mục dist

```
npm run start
```

1. Kiểm tra lỗi ESLint / Prettier

Câu lệnh này sẽ giúp bạn kiểm tra lỗi ESLint trong dự án

```
npm run lint
```

Nếu bạn muốn ESLint tự động fix lỗi thì chạy câu lệnh sau

```
npm run lint:fix
```
