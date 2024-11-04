export class BuyProduct {

  private listProduct = new Array;
  private totalCost = '1.000.000,00';
  private donativeBuy = '0.01';
  private numCashR = 'Caja01';
  private typeCoin = 'VES';

  /**
   * constructor
   */
  public BuyProduct(){}


  /**
   * SET abd GET totalCost
   */
  public setAmount(_totalCost: any) {
    if(_totalCost != null){
      this.totalCost = _totalCost;
      return true;
    } else {
      return false;
    }

  }

  public getAmount() {
    if(this.totalCost != null && this.totalCost != ''){
      return this.totalCost;
    } else {
      return '0,00';
    }
  }
  /**
   * SET abd GET totalCost
   */

  /**
   * SET abd GET donativeBuy
   */
  public setDonativeBuy(_donativeBuy: string) {
    if(_donativeBuy != null && _donativeBuy != ''){
      this.donativeBuy = _donativeBuy;
      return true;
    } else {
      return false;
    }

  }

  public getDonativeBuy() {
    if(this.donativeBuy != null && this.donativeBuy != ''){
      return this.donativeBuy;
    } else {
      return '0,00';
    }
  }
  /**
 * SET abd GET donativeBuy
 */

  /**
 * SET abd GET numCashR
 */
  public setNumCashR(_numCashR: string) {
    if(_numCashR != null && _numCashR != ''){
      this.numCashR = _numCashR;
      return true;
    } else {
      return false;
    }

  }

  public getNumCashR() {
    if(this.numCashR != null && this.numCashR != ''){
      return this.numCashR;
    } else {
      return 'Not Cash Regitrer';
    }
  }
  /**
   * SET abd GET numCashR
   */

  /**
   * SET abd GET typeCoin
  */
  public setTypeCoin(_typeCoin: any) {
    if(_typeCoin != null && _typeCoin != ''){
      this.totalCost = _typeCoin;
      return true;
    } else {
      return false;
    }

  }

  public getTypeCoin() {
    if(this.typeCoin != null && this.typeCoin != ''){
      return this.typeCoin;
    } else {
      return 'NaN';
    }
  }
  /**
   * SET abd GET typeCoin
   */

}
