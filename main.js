//Format VND
var curentFormat = new Intl.NumberFormat('vn-VN');

// Bài 1: Quản lý tuyển sinh
/**
 * Mô hình 3 khối
 * 
 *   Đầu vào
 * - Tạo các biến số điểm chuẩn, khu vực. đối tượng, môn 1, môn 2, môn 3.
 *   Xử lý
 * - tổng điểm = khu vực + đối tượng + môn 1 + môn 2 + môn 3
 * - xét if với 3 trường 
 *   + không đủ điểm chuẩn thì rớt
 *   + đủ và hơn điểm chuẩn thì đậu
 *   + Nếu có 1 điểm 0 thì rớt
 * Đầu ra
 * - show kết quả = ?
 */


document.getElementById('btnketQua').onclick = function () {
    var diemChuan = document.getElementById('diemChuan').value;
    var khuVuc = parseFloat(document.getElementById('khuVuc').value);
    var doiTuong = parseFloat(document.getElementById('doiTuong').value);
    var mon1 = parseFloat(document.getElementById('mon1').value);
    var mon2 = parseFloat(document.getElementById('mon2').value);
    var mon3 = parseFloat(document.getElementById('mon3').value);
    var ketQua = 0;

    // Xử lý
    var tongDiem = khuVuc + doiTuong + mon1 + mon2 + mon3;

    if (mon1 == 0 || mon2 == 0 || mon3 == 0) {
        ketQua = 'Bạn đã rớt. Do có điểm bằng 0';
    } else if (tongDiem >= diemChuan) {
        ketQua = 'Bạn đã đậu. Tổng điểm: ' + tongDiem;
    } else if (tongDiem <= diemChuan) {
        ketQua = 'Bạn đã rớt. Tổng điểm: ' + tongDiem;
    }

    // Show kết quả
    var result = '';
    result += '<p class="alert alert-success">' + ketQua + '</p>';
    document.getElementById('footerketQua').innerHTML = result;

};

// Bài 2: Tính tiền điện
/**
 *  Mô hình 3 khối
 * 
 * Đầu vào
 *  - Tạo biến họ tên
 *   - Tạo biến số Kw
 *   - Tạo biến tiền điện gán giá trị 0
 * Xử lý
 *   - Xét if với các điều kiện 
 *    số kw <= 50   =>  tiền điện = số kw * 500
 *    số kw >= 50 &&  số kw <= 100     =>   tiền điện = 50 * 500 + (số kw - 50) * 650
 *    số kw >= 100 && số kw <= 200      =>  tiền điện = 50 * 500 + 50 * 650 + (số kw - 100) * 850
 *    số kw >= 200 && số kw <= 350      => tiền điện = 50 * 500 + 50 * 650 + 100 *850 + (số kw -200) * 1100
 *    số kw từ 350 trở lên    =>    tiền điện = 50 * 500 + 50 * 650 + 100 *850 + 150 * 1100 + (số kw -350) * 1300
 * 
 * Đầu ra
 *   - Show họ tên = ?
 *   - Show  tiền điệm = ?
 */

document.getElementById('btntinhTienDien').onclick = function () {
    var ho_Ten = document.getElementById('ho_Ten').value;
    var soKw = parseInt(document.getElementById('soKw').value);
    var tienDien = 0;

    // Xử lý
    if (soKw <= 50) {
        tienDien = soKw * 500
    } else if (soKw >= 50 && soKw <= 100) {
        tienDien = 50 * 500 + (soKw - 50) * 650
    } else if (soKw >= 100 && soKw <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850
    } else if (soKw >= 200 && soKw <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300
    }

    // Show kết quả
    var result = '';
    result += '<p class="alert alert-success">Họ tên: ' + ho_Ten + '</p>';
    result += '<p class="alert alert-primary">Tiền điện: ' + curentFormat.format(tienDien) + '</p>';
    document.getElementById('footertinhTienDien').innerHTML = result;
};

// Bài 3: Tính tiền thuế
/**
 *  Mô hình 3 khối
 * 
 * Đầu vào 
 *  - Tạo các biến họ tên, thu nhập năm, người phụ thuộc
 * Xử lý
 *  - thu nhập chịu thuế = thu nhập năm - 4000000 - (người phụ thuộc * 1600000)
 *  - Xét if với các điều kiện
 *   thu nhập chịu thuế <= 60tr   => tiền thuế = thu nhập chịu thuế * 5%
 *   thu nhập chịu thuế >= 60tr && thu nhập chịu thuế <= 120tr   => tiền thuế = 60tr * 5% + (thu nhập chịu thuế - 60tr) * 10%
 *   thu nhập chịu thuế >= 120tr && thu nhập chịu thuế <= 210tr   => tiền thuế = 60tr * 5% + 60tr * 10% + (thu nhập chịu thuế - 120tr) * 15%
 *   thu nhập chịu thuế >= 210tr && thu nhập chịu thuế <= 384tr   => tiền thuế = 60tr * 5% + 60tr * 10% + 90tr * 15% + (thu nhập chịu thuế - 210tr) * 20%
 *  thu nhập chịu thuế >= 384tr && thu nhập chịu thuế <= 624tr   => tiền thuế = 60tr * 5% + 60tr * 10% + 90tr * 15% + 174tr * 20% + (thu nhập chịu thuế - 384tr) * 25%
 *  thu nhập chịu thuế >= 624tr && thu nhập chịu thuế <= 960tr   => tiền thuế = 60tr * 5% + 60tr * 10% + 90tr * 15% + 174tr * 20% + 240tr * 25% + (thu nhập chịu thuế - 624tr) * 30%
 *  thu nhập chịu thuế >960tr     => tiền thuế = 60tr * 5% + 60tr * 10% + 90tr * 15% + 174tr * 20% + 240tr * 25% + 336tr * 30% + (thu nhập chịu thuế - 960tr) * 35%
 * 
 * Đầu ra
 *  show họ tên = ?
 *       tiền thuế = ?
 *   
 *  
 */
document.getElementById('btntinhTienThue').onclick = function () {
    var hoTen = document.getElementById('hoTen').value;
    var thuNhapNam = parseInt(document.getElementById('thuNhapNam').value);
    var nguoiPhuThuoc = parseInt(document.getElementById('nguoiPhuThuoc').value);
    var tienThue = 0;

    // Xử lý
    var thuNhapChiuThue = thuNhapNam - 4e+6 - (nguoiPhuThuoc * 1600000);

    const THUE_SUAT_1 = 0.05;
    const THUE_SUAT_2 = 0.1;
    const THUE_SUAT_3 = 0.15;
    const THUE_SUAT_4 = 0.2;
    const THUE_SUAT_5 = 0.25;
    const THUE_SUAT_6 = 0.3;
    const THUE_SUAT_7 = 0.35;

    if (thuNhapChiuThue <= 60e+6) {
        tienThue = thuNhapChiuThue * THUE_SUAT_1;
    } else if (thuNhapChiuThue >= 60e+6 && thuNhapChiuThue <= 120e+6) {
        tienThue = 60e+6 * THUE_SUAT_1 + (thuNhapChiuThue - 60e+6) * THUE_SUAT_2;
    } else if (thuNhapChiuThue >= 120e+6 && thuNhapChiuThue <= 210e+6) {
        tienThue = 60e+6 * THUE_SUAT_1 + 60e+6 * THUE_SUAT_2 + (thuNhapChiuThue - 120e+6) * THUE_SUAT_3;
    } else if (thuNhapChiuThue >= 210e+6 && thuNhapChiuThue <= 384e+6) {
        tienThue = 60e+6 * THUE_SUAT_1 + 60e+6 * THUE_SUAT_2 + 90e+6 * THUE_SUAT_3 + (thuNhapChiuThue - 210e+6) * THUE_SUAT_4;
    } else if (thuNhapChiuThue >= 384e+6 && thuNhapChiuThue <= 624e+6) {
        tienThue = 60e+6 * THUE_SUAT_1 + 60e+6 * THUE_SUAT_2 + 90e+6 * THUE_SUAT_3 + 174e+6 * THUE_SUAT_4 + (thuNhapChiuThue - 384e+6) * THUE_SUAT_5;
    } else if (thuNhapChiuThue >= 624e+6 && thuNhapChiuThue <= 960e+6) {
        tienThue = 60e+6 * THUE_SUAT_1 + 60e+6 * THUE_SUAT_2 + 90e+6 * THUE_SUAT_3 + 174e+6 * THUE_SUAT_4 + 240e+6 * THUE_SUAT_5 + (thuNhapChiuThue - 624e+6) * THUE_SUAT_6;
    } else {
        tienThue = 60e+6 * THUE_SUAT_1 + 60e+6 * THUE_SUAT_2 + 90e+6 * THUE_SUAT_3 + 174e+6 * THUE_SUAT_4 + 240e+6 * THUE_SUAT_5 + 336e+6 * THUE_SUAT_6 + (thuNhapChiuThue - 960e+6) * THUE_SUAT_7;
    }
    var result = '';
    result += '<p class="alert alert-success">Họ tên: ' + hoTen + '</p>';
    result += '<p class="alert alert-primary">Tiền thuế thu nhập cá nhân: ' + curentFormat.format(tienThue) + ' VND</p>';
    document.getElementById('footertinhTienThue').innerHTML = result;
};

// Bài 4: Tính tiền cáp

/**
 * Mô hình 3 khối
 * 
 * Sử dụng Onchange để ẩn hiện ô nhập số kết nối khi chọn loại khách hàng
 * tạo biến mySelect
 * Nếu mySelect === 0 thì arlert('Vui lòng chọn loại khách hàng')
 *   Trong else thì chia ra 3 trường hợp là mySelect === 'nhaDan' thì phí Dv, phí Xl, Kênh cao cấp ntn và ngược lại ntn
 *   tiền cáp = phí xử lý + phí dịch vụ + kênh cao cấp
 * show  mã khách hàng = ?
 *      tiền cáp = ?
 * 
 */


function changeOption() {
    var x = document.getElementById("mySelect").value;

    if (x === 'doanhNghiep') {
        document.getElementById("demo").className = 'form-group alert alert-success';
        document.getElementById("demo").innerHTML = `<input type="number" id="soKetNoi" class="form-control" placeholder="Số kết nối">`;

    } else {
        document.getElementById("demo").className = '';
        document.getElementById("demo").innerHTML = "";
    }
}

document.getElementById('btntinhTienCap').onclick = function () {
    var mySelect = document.getElementById('mySelect').value;
    if (mySelect == 0) {
        alert('Vui lòng chọn loại khách hàng')
    } else {

        var maKH = document.getElementById('maKH').value;
        var kenhCaoCap = 0.0;
        var phiXuLy = 0.0;
        var phiDichVu = 0.0;
        var soKetNoi = mySelect == "nhaDan" ? 0 : document.getElementById('soKetNoi').value * 1;
        var soKenhCaoCap = document.getElementById('soKenhCaoCap').value * 1;
        var tienCap = 0;
        
        if (mySelect === 'nhaDan') {
            phiXuLy = 4.5;
        } else {
            phiXuLy = 15;
        }
        if (mySelect === 'nhaDan') {
            phiDichVu = 20.5;
        } else {
            if (soKetNoi <= 10) {
                phiDichVu = 75;
            } else {
                phiDichVu = 75 + (soKetNoi - 10) * 5;
            }

        }
        if (mySelect === 'nhaDan') {
            kenhCaoCap = soKenhCaoCap * 7.5;
        } else {
            kenhCaoCap = soKenhCaoCap * 50;
        }

        tienCap = parseFloat(phiXuLy + phiDichVu + kenhCaoCap);

        var result = '';
        result += '<p class="alert alert-success">Mã KH: ' + maKH + '</p>';
        result += '<p class="alert alert-primary">Tiền cáp: $' + curentFormat.format(tienCap)  + '</p>';
        document.getElementById('footertinhTienCap').innerHTML = result;
    }
};