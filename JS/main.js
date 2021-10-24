

let intro = document.querySelector('.intro');
        let logo = document.querySelector('.intro-Logo');

        window.addEventListener('DOMContentLoaded', ()=>{
           setTimeout(() => {
               setTimeout(() => {
                   intro.classList.add('active');
                    document.body.classList.add('acc')
               });

               setTimeout(()=> {
                    intro.classList.remove('active');
                    document.body.classList.remove('acc')
                    intro.classList.add('fade');
               },5500)
           })
        })

// setTimeout (() => {
//     document.getElementById("Twriter").play();
// },8900)

let mangsanpham = [
    {ID : 1,Tien : 400 , Hang : 'Sony'},
    {ID : 2,Tien : 100 , Hang : 'Apple'},
    {ID : 3,Tien : 200 , Hang : 'Keact'},
    {ID : 4,Tien : 300 , Hang : 'Samsung'},
];




let mangsptheoten = mangsanpham.sort((sptieptheo , sp) => {
    let tensptieptheo = sptieptheo.Hang.toLowerCase();
    let tenSP = sp.Hang.toLocaleLowerCase();
    if(tensptieptheo > tenSP)
    {
        return 1;
    }
    if(tensptieptheo < tenSP){
        return -1;
    }
    return 1;
});

console.log('todo : ',mangsptheoten)


// let mangsptheogia = mangsanpham.sort((sptieptheo, sp )=>{
//     if((sptieptheo.Tien - sp.Tien > 0))
//     {
//         return -1;
//     }
//     else{
//         return 1;
//     }
   
// });

// console.log('todo : ',mangsptheogia)



