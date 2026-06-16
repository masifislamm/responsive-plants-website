/*=============== QUANTITY SELECTOR ===============*/
const qtyMinus = document.getElementById('qty-minus')
const qtyPlus  = document.getElementById('qty-plus')
const qtyValue = document.getElementById('qty-value')
let qty = 1

if(qtyMinus && qtyPlus){
    qtyMinus.addEventListener('click', () => {
        if(qty > 1){ qtyValue.textContent = --qty }
    })
    qtyPlus.addEventListener('click', () => {
        qtyValue.textContent = ++qty
    })
}

/*=============== ADD TO CART ===============*/
const cartBtn = document.getElementById('add-to-cart')

if(cartBtn){
    cartBtn.addEventListener('click', () => {
        if(cartBtn.classList.contains('detail__cart-btn--added')) return

        cartBtn.classList.add('detail__cart-btn--added')
        cartBtn.innerHTML = '<i class="ri-checkbox-circle-line button__icon"></i> Added!'

        setTimeout(() => {
            cartBtn.innerHTML = '<i class="ri-shopping-bag-line button__icon"></i> Add to Cart'
            cartBtn.classList.remove('detail__cart-btn--added')
        }, 2000)
    })
}

/*=============== WISHLIST TOGGLE ===============*/
const wishBtn = document.getElementById('wish-btn')

if(wishBtn){
    wishBtn.addEventListener('click', () => {
        wishBtn.classList.toggle('detail__wish-btn--active')
        const icon = wishBtn.querySelector('i')
        if(wishBtn.classList.contains('detail__wish-btn--active')){
            icon.className = 'ri-heart-fill'
        } else {
            icon.className = 'ri-heart-line'
        }
    })
}

/*=============== IMAGE THUMBNAIL SWITCHER ===============*/
function switchThumb(btn, src){
    const mainImg = document.getElementById('detail-main-img')
    if(mainImg) mainImg.src = src

    document.querySelectorAll('.detail__thumb').forEach(t => {
        t.classList.remove('detail__thumb--active')
    })
    btn.classList.add('detail__thumb--active')
}

/*=============== SCROLL REVEAL ===============*/
const srDetail = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

srDetail.reveal('.detail__breadcrumb')
srDetail.reveal('.detail__image-box', {origin: 'left', delay: 500})
srDetail.reveal('.detail__data',      {origin: 'right', delay: 500})
srDetail.reveal('.reviews__summary',  {delay: 300})
srDetail.reveal('.review__card',      {interval: 150})
