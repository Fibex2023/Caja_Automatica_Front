export class Client {

  private nameCl = 'Miguel Rodac';
  private ciNum = 'V21654665';
  private phone!: string;
  private refZelle = 4050;

  /**
   * constructor
   */
  public client() { }

  /**
   * SET abd GET nameCl
   */
  public setNameCl (_nameCl: string) {

    if(_nameCl != null && _nameCl != ''){
      this.nameCl = _nameCl;
      return true;
    } else {
      return false;
    }

  }

  public getNameCl () {

    if(this.nameCl != null && this.nameCl != ''){
      return this.nameCl;
    } else {
      return 'Not name';
    }

  }
  /**
   * SET abd GET nameCl
   */

  /**
   * SET abd GET ciNum
   */
  public setCiNum(_ciNum: string) {
    if(_ciNum != null && _ciNum != ''){
      this.ciNum = _ciNum;
      return true;
    } else {
      return false;
    }

  }

  public getCiNum () {
    if(this.ciNum != null && this.ciNum != ''){
      return this.ciNum;
    } else {
      return '0';
    }

  }
   /**
   * SET abd GET ciNum
   */

     /**
   * SET abd GET phone
   */
  public setPhone (_phone: string) {

    if(_phone != null && _phone != ''){
      this.phone = _phone;
      return true;
    } else {
      return false;
    }

  }

  public getPhone () {

    if(this.phone != null && this.phone != ''){
      return this.phone;
    } else {
      return 'Not name';
    }

  }
  /**
   * SET abd GET phone
   */

  /**
   * SET abd GET refZelle
   */
  public setRefZelle(_refZelle: number) {
    if(_refZelle != null && Number.isInteger(_refZelle)){
      this.refZelle = _refZelle;
      return true;
    } else {
      return false;
    }

  }

  public getRefZelle () {
    if(this.refZelle != null && Number.isInteger(this.refZelle)){
      return this.refZelle;
    } else {
      return 0;
    }

  }
   /**
   * SET abd GET refZelle
   */
}
