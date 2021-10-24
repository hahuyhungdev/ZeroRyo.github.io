function Plusclick(){
    var plus = document.querySelector(".SLL");
    var total = document.querySelector(".Price");
    var number = plus.innerHTML;
    ++number;
    if(number<=10)
    {
        document.querySelector(".SLL").innerHTML = number;
    }
    else{
        console.log(number);
    }
}

function Minusclick(){
    var plus = document.querySelector(".SLL");
    var number1 = plus.innerHTML;
    number1--;    
    if(number1 >= 0)
    {
        console.log(number1);
        document.querySelector(".SLL").innerHTML = number1;
    }
    else{
        console.log(number1);
    }
}

function addcart()
{
  var element = document.getElementById("cartnumber");
  var value = element.innerHTML;
  
  var txtbtn = document.querySelector(".btnadd");
  ++value;
  console.log(value);
  document.getElementById("cartnumber").innerHTML = value ;
 Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Đã Lưu Vào Giỏ Hàng',
    showConfirmButton: true,
    confirmButtonColor: '#59c8e0',
    timer: 2000
  })
  txtbtn.innerHTML = "Đã thêm vào giỏ hàng"; 
  txtbtn.style.background = "#59c8e0";
  txtbtn.style.color = "#FFFFFF";
 

  var storageKey = 'cart';
  var storageKeys = 'quantitySL';
  var storageKeyss = 'total';

  let  cart = [
      {
          id: "HH1",
          image: "/Thuanvm/Media/imgProduct.png",
          name: "Bình Hoa Lan Hồ - D102",
          price : "1,104,000",
          quantity: "2",
         
      },
      {
          id : "HH2",
          image: "/Thuanvm/Media/imgProduct3.png",
          name: "Love and rose -  D101",
          price : "1,104,000",
          quantity: "2",
          
      },

  ];
  
  var quantitySL = [
      {
          SL:"2"
      }
  ]

  var total = [
      {
          pricetotal:"4,416,000đ"
      }
  ]
  
  localStorage.setItem(storageKeys, JSON.stringify(quantitySL));
  localStorage.setItem(storageKey, JSON.stringify(cart));
  localStorage.setItem(storageKeyss, JSON.stringify(total));

}
let cartProduct = $('.cartProduct-Cart');
let cartQuantity = $('.cartboder');
let cartQuantitySP = $('.item3');
let cartTotal = $('.cartProduct-Bill-Total');
let Checkout_Bill = $('.Block_Header-FormBill-SP');
let Checkout_BillPrice = $('.Block_Header-FormBill-TotalPrice')

function getProduct(){
    if(localStorage != null){
        let quantity = JSON.parse(localStorage.getItem('quantitySL'));
        let totalprice = JSON.parse(localStorage.getItem('total'));

        let SLSP = $(
            ` <p class="number-product">
            có <span class="item">`+ quantity[0].SL +`</span> sản phẩm
        </p>`
        )

        let Total = $(
            `<p class="Price">` + totalprice[0].pricetotal +`</p>`
        )
        console.log(totalprice);
        cartQuantitySP.append(SLSP);
        cartTotal.append(Total);
        for(let i= 0 ; i <= localStorage.length; i++){
            let product = JSON.parse(localStorage.getItem('cart'));
           
            let SL = $(
                `<p class="cartnumber">`+ product[i].quantity +`</p>`
            )

            let CheckOut = $(
                `
                <p class="NameProduct">`+ product[i].name +`</p>
                <div class="PriceProduct">
                    <p class="PriceProduct-total">`+ product[i].price +`</p>
                    <p class="PriceProduct-Quantity">`+ product[i].quantity+`</p>
                </div>
                <hr class="boder">
                `
            )

            let html = $(
                `
                
                <img src= "` + product[i].image + ` " alt="">

                <div class="info_cart">
                <p id="ShoppingProductName" class="info_cart-namecart">`
                                    + product[i].name + `
                                </p>

                 <p id="ShoppingProductPrice" class="info_cart-price">`
                    + product[i].price + `
                 </p>
                <div class="info_cart-function">
                    <button onclick = "delProduct()" class="del">
                        <i>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z" fill="#59C8E0"/>
                            </svg>
                        </i>
                        Xóa Sản Phẩm
                    </button>
             <div class="boder"></div>
                    <button  class="add">
                        <i>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8H9C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8H17C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13ZM12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6H9C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3ZM19 6H17C17 5.34339 16.8707 4.69321 16.6194 4.08658C16.3681 3.47995 15.9998 2.92876 15.5355 2.46447C15.0712 2.00017 14.52 1.63188 13.9134 1.3806C13.3068 1.12933 12.6566 1 12 1C10.6739 1 9.40215 1.52678 8.46447 2.46447C7.52678 3.40215 7 4.67392 7 6H5C3.89 6 3 6.89 3 8V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V8C21 6.89 20.1 6 19 6Z" fill="#59C8E0"/>
                            </svg> 
                        </i>
                        Thêm Sản Phẩm
                    </button>
            </div>
            </div>
            <div class="UpandDown">
            <button onclick="Minusclick()" class="Minus">
                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6004 1.00001C11.6004 1.44184 11.2422 1.80001 10.8004 1.80001H6.80039H5.20039H1.20039C0.758562 1.80001 0.400391 1.44184 0.400391 1.00001C0.400391 0.558184 0.758563 0.200012 1.20039 0.200012H5.20039H6.80039H10.8004C11.2422 0.200012 11.6004 0.558184 11.6004 1.00001Z" fill="#D3D7DE"/>
                </svg>   
            </button>
            <div class="SL">
                <p  class="SLL">` + product[i].quantity + `</p>
            </div>
            <button onclick="Plusclick()" class="Plus">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4002 5.8002C11.4002 6.24202 11.042 6.6002 10.6002 6.6002H6.6002V10.6002C6.6002 11.042 6.24202 11.4002 5.8002 11.4002C5.35837 11.4002 5.0002 11.042 5.0002 10.6002V6.6002H1.00019C0.558367 6.6002 0.200195 6.24202 0.200195 5.8002C0.200195 5.35837 0.558367 5.0002 1.0002 5.0002H5.0002V1.00019C5.0002 0.558367 5.35837 0.200195 5.8002 0.200195C6.24202 0.200195 6.6002 0.558367 6.6002 1.0002V5.0002H10.6002C11.042 5.0002 11.4002 5.35837 11.4002 5.8002Z" fill="#6B778C"/>
                </svg>                         
            </button>
        </div>
        <br>
                 `
                 )
                 console.log(product);
                 console.log(quantity);
                cartProduct.append(html);
                cartQuantity.append(SL);
                Checkout_Bill.append(CheckOut);
          
            
            
        }
        
    }
}
getProduct();

function Checkout(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Xác Nhận Thanh Toán',
        showConfirmButton: true,
        confirmButtonColor: '#59c8e0',
        timer: 2000
      })
}

function delProduct(){
    // localStorage.removeItem('cart');
    // localStorage.removeItem('quantitySL');
    // localStorage.removeItem('total');
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Bạn Có Muốn Xóa Sản Phẩm?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Đồng Ý Xóa',
        cancelButtonText: 'Không Xóa',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

            localStorage.removeItem('cart');
             localStorage.removeItem('quantitySL');
            localStorage.removeItem('total');

          swalWithBootstrapButtons.fire(
            'Xóa',
            'Sản Phẩm Đã Được Xóa !',
              setTimeout( function(){
                window.location.reload();
            },2100)
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Hãy Cẩn Thận',
            'Bạn Có Thể Mất Sản Phẩm',
            'error'
          )
        }
      })
}
function modal(){
    var modal = document.getElementById("Modal");

// Get the button that opens the modal
var btn = document.getElementById("inputCode");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
btn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// btn.onclick = function(event) {
  
//     modal.style.display = "none";
 
// }
}