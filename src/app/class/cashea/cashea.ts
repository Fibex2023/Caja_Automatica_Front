export class Cashea {
  private idOrder: number = 1912;
  private numSeq: number = 190;

    /**
   * constructor
   */
  public Cashea(){}
    /**
   * constructor
   */

     /**
   * SET and GET idOrder
   */
  public setIdOrder (_idOrder: number) {

    if(_idOrder != null && Number.isInteger(_idOrder)){
      this.idOrder = _idOrder;
      return true;
    } else {
      return false;
    }

  }

  public getIdOrder () {

    if(this.idOrder != null && Number.isInteger(this.idOrder)){
      return this.idOrder;
    } else {
      return 0;
    }

  }
  /**
   * SET and GET idOrder
   */

  /**
   * SET and GET numSeq
   */
  public setNumSeq(_numSeq: number) {
    if(_numSeq != null && Number.isInteger(_numSeq)){
      this.numSeq = _numSeq;
      return true;
    } else {
      return false;
    }

  }

  public getNumSeq () {
    if(this.numSeq != null && Number.isInteger(this.numSeq)){
      return this.numSeq;
    } else {
      return 0;
    }

  }
   /**
   * SET and GET numSeq
   */

}
