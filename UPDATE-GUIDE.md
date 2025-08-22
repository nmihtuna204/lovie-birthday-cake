# 🔄 Hướng dẫn cập nhật website

## Khi bạn muốn thay đổi gì đó:

### Bước 1: Chỉnh sửa file
- Mở file `birthday-cake.html` 
- Thay đổi màu sắc, text, hoặc bất kì gì
- Save file

### Bước 2: Push lên GitHub
```powershell
# Trong thư mục birthday-cake
git add .
git commit -m "🎨 Thay đổi màu sắc" 
git push origin main
```

### Bước 3: Đợi GitHub Pages rebuild
- Thời gian: 2-5 phút
- Website tự động cập nhật: https://nmihtuna204.github.io/lovie-birthday-cake

## ⚡ Kiểm tra nhanh:
```powershell
# Xem status
git status

# Xem history
git log --oneline -5
```

## 🚨 Lưu ý:
- Luôn nhớ `git add .` trước khi commit
- Commit message nên mô tả thay đổi
- Refresh website sau 5 phút để thấy thay đổi
