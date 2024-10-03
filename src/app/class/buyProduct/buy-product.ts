export class BuyProduct {

  private listProduct = new Array;
  private totalCost = 250.30;
  private donativeBuy = 36.63;
  private numCashR = 'Caja01';

  /**
   * constructor
   */
  public BuyProduct(){}


  /**
   * SET abd GET totalCost
   */
  public setAmount(_totalCost: any) {
    if(_totalCost != null && Number.isFinite(_totalCost)){
      this.totalCost = _totalCost;
      return true;
    } else {
      return false;
    }

  }

  public getAmount() {
    if(this.totalCost != null && Number.isFinite(this.totalCost)){
      return this.totalCost;
    } else {
      return 0;
    }
  }
  /**
   * SET abd GET totalCost
   */

  /**
   * SET abd GET donativeBuy
   */
  public setDonativeBuy(_donativeBuy: any) {
    if(_donativeBuy != null && Number.isInteger(_donativeBuy)){
      this.donativeBuy = _donativeBuy;
      return true;
    } else {
      return false;
    }

  }

  public getDonativeBuy() {
    if(this.donativeBuy != null && Number.isFinite(this.donativeBuy)){
      return this.donativeBuy;
    } else {
      return 0;
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
     * SET abd GET totalCost
     */

}
