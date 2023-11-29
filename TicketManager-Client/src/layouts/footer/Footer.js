import React from "react";
import "./footer.css";
/**
 * @author
 * @function Footer
 **/

export const Footer = (props) => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>Về chúng tôi</h4>
              <ul>
                <li>
                  <a href="#">Phần mềm nhà xe</a>
                </li>
                <li>
                  <a href="#">Phần mềm đại lý</a>
                </li>
                <li>
                  <a href="#">Tuyển dụng</a>
                </li>
                <li>
                  <a href="#">Tin tức</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Hỗ trợ </h4>
              <ul>
                <li>
                  <a href="#">Hướng dẫn thanh toán</a>
                </li>
                <li>
                  <a href="#">Chính sách bảo mật thông tin</a>
                </li>
                <li>
                  <a href="#">Chính sách bảo mật thanh toán</a>
                </li>
                <li>
                  <a href="#">Câu hỏi thường gặp</a>
                </li>
                <li>
                  <a href="#">Tra cứu đơn hàng</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Nhà xe đối tác</h4>
              <ul>
                <li>
                  <a href="#">xe xuân táng</a>
                </li>
                <li>
                  <a href="#">xe phương trang</a>
                </li>
                <li>
                  <a href="#">xe nam á</a>
                </li>
                <li>
                  <a href="#">xe Sao việt</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 className="follow-us">theo dõi chúng tôi</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-google"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
