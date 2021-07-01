Step1: git init
-> Khởi tạo repo dưới local
Step2: git checkout -b branchName
-> Tạo nhánh mới có tên là ...
Step3: Commit code
- git add fileName -> add từng file 1
- git add . -> add tất cả các file
- git commit -m "Message"
Step4: Add remote
- git remote add origin git@github.com:htkhoi/learn-git.git 
Step5: Push code
- git push origin
-> Push code sau khi làm xong task


Các lệnh Git cơ bản
- git branch -d tên_nhánh -> Xóa 1 nhánh
- git checkout -b tên_nhánh -> tạo mới 1 nhánh và chuyển sang nhánh đó
- git branch -> Xem danh sách nhánh
- git checkout tên_nhánh -> chuyển nhánh
- git remote add tên_remote link_remote -> Thêm mới một remote
- git add fileName -> add một file
- git add . -> add nhiều file cùng 1 lúc
- git commit -m "Nội dung message" -> Commit code (Note: Để commit code thì phải add trước)
- git push origin tên_nhánh -> Đẩy code lên nhánh  (origin là tên remote mà chúng ta đặt)
- git pull origin tên_nhánh -> Pull code (kéo code) mới nhất của nhánh đó về local