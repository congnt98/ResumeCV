const chokidar = require('chokidar');
const simpleGit = require('simple-git');
const path = require('path');

const git = simpleGit();

// Đường dẫn đến thư mục chứa các file HTML/CSS
const watchFolder = './';

// Theo dõi các thay đổi
chokidar.watch(watchFolder, { ignored: /(^|[\/\\])\../ }).on('change', (filePath) => {
  console.log(`File ${filePath} đã thay đổi`);
  
  // Thực hiện git add, commit và push
  git.add(filePath)
    .then(() => git.commit(`Auto-commit: ${path.basename(filePath)} updated`))
    .then(() => git.push('origin', 'main')) // Thay 'main' bằng tên branch của bạn nếu khác
    .then(() => console.log('Pushed to GitHub'))
    .catch((err) => console.error('Lỗi:', err));
});

console.log('Đang theo dõi các thay đổi...');