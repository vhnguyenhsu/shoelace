import { registerTranslation } from '../utilities/localize';
import type { Translation } from '../utilities/localize';

const translation: Translation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',

  clearEntry: 'Hủy',
  close: 'Đóng',
  copy: 'Sao chép',
  currentValue: 'Giá trị hiện tại',
  hidePassword: 'Giấu mật khẩu',
  progress: 'Tiến độ',
  remove: 'Tháo bỏ',
  resize: 'Đổi kích cỡ',
  scrollToEnd: 'Cuộn đến cuối',
  scrollToStart: 'Cuộn về đầu',
  selectAColorFromTheScreen: 'Chọn 1 màu trên màn hình',
  showPassword: 'Hiện mật khẩu',
  toggleColorFormat: 'Đổi mã màu'
};

registerTranslation(translation);

export default translation;
