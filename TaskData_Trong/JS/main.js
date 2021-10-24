// Get the modal
var modal = document.getElementById("modaladd");

// Get the button that opens the modal
var btn = document.getElementById("btnadd");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Edit modal -----------

function CLickedit(){
  var modal1 = document.getElementById("modaledit");

// Get the button that opens the modal
var btn1 = document.getElementById("edit");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("modal-close1")[0];

// When the user clicks the button, open the modal 

  modal1.style.display = "flex";


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
}

function delCLick()
{
  Swal.fire({
    title: 'Bạn Có Chắc Muốn Xóa ?',
    text: "Bạn Sẽ Mất Dữ Liệu Này",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0099ff',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Đồng Ý Xóa',
    cancelButtonText:'Không Xóa'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Đã Xóa',
        'Dữ Liệu Đã Được Xóa',
        'success'
      )
    }
  })
}

// -----------------

function Additem(){
  Swal.fire({
    position: 'center',
    
    icon: 'success',
    title: 'Thêm dữ liệu thành công',
    showConfirmButton: true,
    timer: 5500,
    index:199
  })
}

function editClick(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Đã Lưu Chỉnh Sửa',
    showConfirmButton: true,
    timer: 5500,
    index:199
  })
}

function selectRow(){
        
  var checked = document.getElementsByName("select");
  for( var i = 0; i < checked.length; i++ )
  {
      checked[i].onclick = function()
      {
          // remove class from the other rows
          
          // var el = document.getElementById("first-tr");
          
          // go to the nex sibing
          // while(el = el.nextSibling)
          // {
          //     if(el.tagName === "TR")
          //     {
          //         // remove the selected class
          //         el.classList.remove("selected");
          //     }
          // }
          
       // radio  -      td      -          tr 
          this.parentElement.parentElement.classList.toggle("selected");
      };
  }

}
selectRow();