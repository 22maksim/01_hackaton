import {Module} from '../core/module'

export class RateBitcoin extends Module {
  constructor(type, text) {
    super(type, text)
  }

  async trigger() {
    try {
      const elModal = document.querySelector('.modal')
      if (!elModal) {
        const bitcoinApi = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        const responsBitcoin = await bitcoinApi.json()
        const price = responsBitcoin.bpi
        const time = responsBitcoin.time
        const disclaimer = responsBitcoin.disclaimer
        this.modal(price, time, disclaimer)
      }
    } catch(error) {
      console.error('Ошибка:', error)
    }
  
  }

  modal(price, time, disclaimer) {
    const modalBlock = document.createElement('div')
    modalBlock.classList.add('modal')
    const rate =
     `
        <h3>Rate Bitcoin</h3>

        <div class="rate1">
          <h2>${price.EUR.code} ${price.EUR.symbol}</h2>
          <p class="col-p">${price.EUR.rate_float}${price.EUR.symbol}</p>
        </div>

        <div class="rate2">
          <h2>${price.GBP.code} ${price.GBP.symbol}</h2>
          <p class="col-p">${price.GBP.rate_float}${price.GBP.symbol}</p>
        </div>

        <div class="rate3">
          <h2>${price.USD.code} ${price.USD.symbol}</h2>
          <p class="col-p">${price.USD.rate_float}${price.USD.symbol}</p>
        </div>

        <div class="rate4">
          <h3>${time.updated}</h3>
          <p>${disclaimer}</p>
        </div>
        <div class="close-block">&#9940;</div>
    `
    
    modalBlock.insertAdjacentHTML('beforeend' ,rate)
    document.body.insertAdjacentElement('beforeend' ,modalBlock)
    const closeBlock = document.querySelector('.close-block')
    closeBlock.addEventListener('click', () => {
      document.body.removeChild(modalBlock)
    })
  }
}
