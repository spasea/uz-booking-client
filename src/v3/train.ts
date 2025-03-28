import Requestable from '../lib/requestable'

export default class Train extends Requestable {
  /**
   * Construct station class.
   * @constructor
   * @param {string} [lang] - language
   * @param {auth} [auth] - the credentials to authenticate to UzBoojking. If auth is
   *                                  not provided requests will be made unauthenticated
   * @param {string} [apiBase] - the base UzBooking API URL
   * @param userId
   */
  constructor(lang: string, auth: any, apiBase: string, userId: number | string) {
    super(lang, auth, apiBase, false, userId)
  }

  /**
   * Find train
   * @param {number} stationFromId - departure station id
   * @param {number} stationToId - target station id
   * @param {string} date - departure date
   * @param {Function} [callback] - callback function
   * @returns {Promise} - the promise for the http request
   */
  public async find(
    stationFromId: number,
    stationToId: number,
    date: string,
    callback?: (error: Error, data?: object, response?: object) => any,
  ) {
    const response = await this.request(
      'GET',
      '/api/trips',
      {
        station_from_id: stationFromId,
        station_to_id: stationToId,
        date,
      },
      'json',
      false,
      callback,
    )

    return response.data
  }

  // /**
  //  * Find train with interchanges
  //  * @param {number} from - departure station id
  //  * @param {number} to - target station id
  //  * @param {string} date - departure date
  //  * @param {string} time - departure time
  //  * @param {Function} cb - callback function
  //  * @returns {Promise} - the promise for the http request
  //  */
  // public findInterchange(
  //   from: number,
  //   to: number,
  //   date: string,
  //   time: string,
  //   // tslint:disable-next-line
  //   callback?: (error: Error, data?: object, response?: object) => any,
  // ) {
  //   return this.request(
  //     'POST',
  //     '',
  //     {
  //       data: {
  //         date,
  //         from_code: from,
  //         time_from: time,
  //         time_to: '23:59:59',
  //         to_code: to,
  //       },
  //       tran_id: 'trains_transfer',
  //     },
  //     'json',
  //     false,
  //     callback,
  //   )
  // }
}
