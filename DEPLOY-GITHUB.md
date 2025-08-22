# 🚀 Hướng dẫn Deploy Website Birthday Cake

## 📋 Các bước thực hiện:

### 1. 🌐 Tạo GitHub Repository

1. **Truy cập GitHub.com** và đăng nhập
2. **Click nút "+"** ở góc phải → **New repository**
3. **Điền thông tin:**
   - Repository name: `lovie-birthday-cake`
   - Description: `🎂 Beautiful birthday cake website with piano music effects`
   - Chọn **Public**
   - **KHÔNG** check "Add a README file"
4. **Click "Create repository"**

### 2. 🔧 Cập nhật Git Remote

Sau khi tạo repository, chạy các lệnh sau (thay `YOUR_USERNAME` bằng username GitHub của bạn):

```powershell
# Xóa remote cũ
git remote remove origin

# Thêm remote mới với username của bạn
git remote add origin https://github.com/YOUR_USERNAME/lovie-birthday-cake.git

# Push code lên GitHub
git push -u origin main
```

### 3. 🌟 Enable GitHub Pages

1. **Vào repository** trên GitHub.com
2. **Click tab "Settings"**
3. **Scroll xuống phần "Pages"** (bên trái)
4. **Source**: Deploy from a branch
5. **Branch**: main
6. **Folder**: / (root)
7. **Click "Save"**

**Website sẽ có URL**: `https://YOUR_USERNAME.github.io/lovie-birthday-cake`

### 4. 📱 Chia sẻ với bạn bè

#### Cách 1: Gửi link trực tiếp
```
🎂 Happy Birthday Lovie! 🎉
Tôi đã tạo một website sinh nhật đặc biệt cho bạn:
👉 https://YOUR_USERNAME.github.io/lovie-birthday-cake

Nhấn vào chiếc bánh kem để phát nhạc sinh nhật nhé! 🎵✨
```

#### Cách 2: QR Code
1. Vào `https://qr-code-generator.com`
2. Paste URL website
3. Tạo QR code
4. Gửi hình QR code cho bạn

#### Cách 3: Gửi ZIP file
```powershell
# Tạo file ZIP
Compress-Archive -Path *.* -DestinationPath birthday-cake-lovie.zip
```

## 🔄 Cách cập nhật website sau này

```powershell
# Sau khi chỉnh sửa file
git add .
git commit -m "🎨 Updated website design"
git push origin main
```

Website sẽ tự động cập nhật sau vài phút!

## 🎯 Troubleshooting

### Nếu gặp lỗi permission:
1. Kiểm tra username trong URL có đúng không
2. Đảm bảo đã đăng nhập GitHub
3. Repository phải là Public

### Nếu website không hiển thị:
1. Kiểm tra file `index.html` có trong root không
2. Đợi 5-10 phút để GitHub Pages deploy
3. Thử truy cập `https://YOUR_USERNAME.github.io/lovie-birthday-cake/birthday-cake.html`

---

🎉 **Chúc mừng! Website sinh nhật của bạn đã sẵn sàng để chia sẻ!** 🎂✨
