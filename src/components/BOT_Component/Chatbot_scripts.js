import {ChatbotReview} from './ChatbotReview'

export const ChatbotScript = [
  {
    id: '0',
    message: "AI Táo xin chào quý khách, quý khách cần Táo giúp gì không ạ?",
    trigger: "help_menu"
  },
  {
    id: "help_menu",
    options: [
      { value: 'mua_hang', label: 'Mua trái cây', trigger: '2' },
      { value: 'moreInfor', label: 'Cho biết thông tin về Táo Autumn', trigger: '4' },
      { value: 'contact', label: 'Liên hệ người bán', trigger: '5' },
    ],
  },
  {
    id: '1',
    message: "Bạn còn cần AI Táo giúp gì nữa không ạ?",
    trigger: "help_menu"
  },
  {
    id: '2',
    options: [
      { value: 'autumn_glory', label: 'Táo Autumn Glory Mỹ', trigger: '3' },
      { value: 'nho_mau_don', label: 'Nho Mẫu Đơn Hàn Quốc', trigger: '3' },
      { value: 'khac', label: 'Khác', trigger: 'khac' },
    ],
  },
  {
    id: 'khac',
    message: "Bạn muốn mua trái cây gì?",
    trigger: "user_request"
  },
  {
    id: 'user_request',
    user: true,
    inputType: 'text',
    trigger: "user_specify",
  },
  {
    id: "user_specify",
    message: "Sản phẩm bạn cần đang có chút vấn đề, chúng tôi sẽ liên hệ ngay, bạn để lại thông tin liên hệ nhé",
    trigger: "contact"
  },
  {
    id: "contact",
    options: [
      { value: 'yes', label: 'OK', trigger: 'sdt' },
      { value: 'no', label: 'Không', trigger: '1' },
    ]
  },
  {
    id: "sdt",
    message: "Số điện thoại của bạn là:",
    trigger: "user_phone"
  },
  {
    id: "user_phone",
    user: true,
    inputType: 'number',
    trigger: 'lienhe'
  },
  {
    id:'lienhe',
    message: "Cảm ơn bạn đã sử dụng dịch vụ, chúng tôi sẽ liên hệ ngay khi có thể.",
    trigger: "1"
  },
  {
    id: '3',
    message: 'Bạn muốn mua mấy cân?',
    trigger: 'quantity',
  },
  {
    id: '4',
    message: 'Táo Autumn Glory có hương vị ngọt ngào, giòn tan cùng một chút hương quế và hương caramel tinh tế.',
    trigger: '1',
  },
  {
    id: '5',
    message: 'Bạn có thể liên hệ chúng tôi ngay qua số: 012345667',
    trigger: '1',
  },
  {
    id: 'quantity',
    user: true,
    trigger: '6',
    validator: (value) => {
      if (isNaN(value)) {
        return 'Giá trị phải là một số nguyên';
      } else if (value < 0) {
        return 'Số ký phải là số dương';
      } else if (value > 120) {
        return `${value}? Bạn muốn làm đại lý. Chúng tôi sẽ liên hệ lại ngay!`;
      }
      return true;
    },
  },
  {
    id: '6',
    message: 'Bạn muốn mua {previousValue} ký, Cho tôi biết thêm thông tin để giao hàng nhé!',
    trigger: '7',
  },
  {
    id: '7',
    message: 'Địa chỉ nhận hàng của bạn là:',
    trigger: 'address',
  },
  {
    id: 'address',
    user: true,
    trigger: "8"
  },
  {
    id: '8',
    message: 'Số điện thoại nhận hàng là:',
    trigger: 'phone',
  },
  {
    id: 'phone',
    user: true,
    trigger: '9',
  },
  {
    id: '9',
    message: 'OK, thông tin đơn hàng của bạn là:',
    trigger: 'review',
  },
  {
    id: 'review',
    component: <ChatbotReview />,
    asMessage: true,
    trigger: 'update',
  },
  {
    id: 'update',
    message: 'Bạn có muốn thay đổi thông tin gì không?',
    trigger: 'update-question',
  },
  {
    id: 'update-question',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'update-yes' },
      { value: 'no', label: 'No', trigger: 'end-message' },
    ],
  },
  {
    id: 'update-yes',
    message: 'Bạn muốn thay đổi thông tin gì nào?',
    trigger: 'update-fields',
  },
  {
    id: 'update-fields',
    options: [
      { value: 'quantity', label: 'Số lượng', trigger: '10' },
      { value: 'address', label: 'Địa chỉ', trigger: '11' },
      { value: 'phone', label: 'Số điện thoại', trigger: '12' },
    ],
  },
  {
    id: '10',
    message: "Số lượng: ",
    trigger: "update-quantity"
  },
  {
    id: 'update-quantity',
    update: 'quantity',
    trigger: '9',
  },
  {
    id: '11',
    message: "Địa chỉ nhận hàng: ",
    trigger: "update-address"
  },
  {
    id: 'update-address',
    update: 'address',
    trigger: '9',
  },
  {
    id: '12',
    message: "Số điện thoại nhận hàng:",
    trigger: "update-phone"
  },
  {
    id: 'update-phone',
    update: 'phone',
    trigger: '9',
  },
  {
    id: 'end-message',
    message: 'Cảm ơn bạn đã đặt hàng, chúng tôi sẽ liên hệ lại ngay khi có thể nhé!',
    end: true,
  },
];