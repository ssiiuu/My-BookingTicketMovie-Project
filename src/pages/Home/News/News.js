import { Tabs } from "antd";
import React from "react";
import "./News.css";

export default function News() {
  const { TabPane } = Tabs;

  const onChange = (key) => {
    // console.log(key);
  };

  return (
    <div id="tinTuc">
      <div className="container mt-20">
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          centered={true}
          tabBarGutter={20}
          tabBarStyle={{ color: "black", fontWeight: 700, fontSize: 35 }}
        >
          <TabPane tab="ĐIỆN ẢNH 24H" key="1">
            <div>
              <div
                style={{ height: 500 }}
                className="newsTabs__item grid grid-cols-2 gap-5"
              >
                <div className="col-span-1 ">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{
                        objectFit: "cover",
                        borderRadius: 6,
                        cursor: "pointer",
                      }}
                      src="https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png"
                      alt="lat-mat-48h"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </p>
                </div>
                <div className="col-span-1 ">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{
                        objectFit: "cover",
                        borderRadius: 6,
                        cursor: "pointer",
                      }}
                      src="https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png"
                      alt="cuoc-chien-sinh-tu"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM
                    ĐIỆN ẢNH NỔI...
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi
                    sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim
                    mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt
                    Nam!
                  </p>
                </div>
              </div>
              <div className="newsTabs__item grid grid-cols-3 gap-5">
                <div className="col-span-1">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{ borderRadius: 6, cursor: "pointer" }}
                      src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                    màn trả thù...
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                    mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                    nghiệp của cô trong phim
                  </p>
                </div>
                <div className="col-span-1">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{ borderRadius: 6, cursor: "pointer" }}
                      src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                    QUỶ”...
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                    năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                    Sik, tác phẩm kinh dị - hành
                  </p>
                </div>
                <div className="col-span-1">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                        alt="KM"
                      />
                      <h2 className="text-gray-400 text-lg ml-3">
                        Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                      </h2>
                    </div>
                  </a>
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                        alt="KM"
                      />
                      <h2 className="text-gray-400 text-lg ml-3">
                        “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                      </h2>
                    </div>
                  </a>
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                        alt="KM"
                      />

                      <h2 className="text-gray-400 text-lg ml-3">
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                        công
                      </h2>
                    </div>
                  </a>
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                        alt="KM"
                      />

                      <h2 className="text-gray-400 text-lg ml-3">
                        Ngô Thanh Vân chính thức khởi động cuộc thi thiết
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="REVIEW" key="2">
            <div>
              <div
                style={{ height: 500 }}
                className="newsTabs__item grid grid-cols-2 gap-5"
              >
                <div className="col-span-1 ">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{
                        objectFit: "cover",
                        borderRadius: 6,
                        cursor: "pointer",
                      }}
                      src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                      alt="review"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM
                    ĐIỆN ẢNH NỔI...
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi
                    sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim
                    mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt
                    Nam!
                  </p>
                </div>
                <div className="col-span-1 ">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{
                        objectFit: "cover",
                        borderRadius: 6,
                        cursor: "pointer",
                      }}
                      src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                      alt="review"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    Review: Dinh Thự Oan Khuất (Ghost Of War)
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự
                    Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
                  </p>
                </div>
              </div>
              <div className="newsTabs__item grid grid-cols-3 gap-5">
                <div className="col-span-1">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{ borderRadius: 6, cursor: "pointer" }}
                      src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                    màn trả thù...
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                    mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                    nghiệp của cô trong phim
                  </p>
                </div>
                <div className="col-span-1">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{ borderRadius: 6, cursor: "pointer" }}
                      src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                    QUỶ”...
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                    năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                    Sik, tác phẩm kinh dị - hành
                  </p>
                </div>
                <div className="col-span-1 mr-12">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                        alt="KM"
                      />
                      <h2 className="text-gray-400 text-lg ml-3">
                        Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                      </h2>
                    </div>
                  </a>
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                        alt="KM"
                      />
                      <h2 className="text-gray-400 text-lg ml-3">
                        “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                      </h2>
                    </div>
                  </a>
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                        alt="KM"
                      />

                      <h2 className="text-gray-400 text-lg ml-3">
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                        công
                      </h2>
                    </div>
                  </a>
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                        alt="KM"
                      />

                      <h2 className="text-gray-400 text-lg ml-3">
                        Ngô Thanh Vân chính thức khởi động cuộc thi thiết
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="KHUYẾN MÃI" key="3">
            <div>
              <div
                style={{ height: 500 }}
                className="newsTabs__item grid grid-cols-2 gap-5"
              >
                <div className="col-span-1 ">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{
                        objectFit: "cover",
                        borderRadius: 6,
                        cursor: "pointer",
                      }}
                      src="https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg"
                      alt="KM"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    BHD 59K/VÉ CẢ TUẦN !!!
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                    59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
                  </p>
                </div>
                <div className="col-span-1 ">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{
                        objectFit: "cover",
                        borderRadius: 6,
                        cursor: "pointer",
                      }}
                      src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                      alt="KM"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    TIX 1K/VÉ NGẠI CHI GIÁ VÉ
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm
                    02 voucher thanh toán ZaloPay thả ga
                  </p>
                </div>
              </div>
              <div className="newsTabs__item grid grid-cols-3 gap-5">
                <div className="col-span-1">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{ borderRadius: 6, cursor: "pointer" }}
                      src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                    màn trả thù...
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                    mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                    nghiệp của cô trong phim
                  </p>
                </div>
                <div className="col-span-1">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <img
                      style={{ borderRadius: 6, cursor: "pointer" }}
                      src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                    />
                  </a>
                  <h1 className="text-xl font-bold mt-5">
                    VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                    QUỶ”...
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                    năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                    Sik, tác phẩm kinh dị - hành
                  </p>
                </div>
                <div className="col-span-1 mr-12">
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                        alt="KM"
                      />
                      <h2 className="text-gray-400 text-lg ml-3">
                        Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                      </h2>
                    </div>
                  </a>
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                        alt="KM"
                      />
                      <h2 className="text-gray-400 text-lg ml-3">
                        “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                      </h2>
                    </div>
                  </a>
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                        alt="KM"
                      />

                      <h2 className="text-gray-400 text-lg ml-3">
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                        công
                      </h2>
                    </div>
                  </a>
                  <a href="https://movie.zalopay.vn/landing" target="_blank">
                    <div className="flex mb-2">
                      <img
                        style={{
                          width: 85,
                          height: 85,
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                        src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                        alt="KM"
                      />

                      <h2 className="text-gray-400 text-lg ml-3">
                        Ngô Thanh Vân chính thức khởi động cuộc thi thiết
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
